/**!
 * Level Flow Tree
 *
 * o    o    o    o   <-- level 1
 * |    |____|__  |
 * |      |    |  |
 * o      o    o  o   <-- leve 2
 * |______|    |__|
 *     |        |
 *     o        o     <-- leve 3
 *     |________|
 *         |
 *         o          <-- level 4
 */


import { getConfig, init, LinkLineType } from "./common";

import "./index.scss";

interface NodeLocation {
  x: number;
  y: number;
}
interface DataNode extends NodeLocation {
  id: string;
  links: string[];
  bizData: DefaultBizData;
  [key: string]: any;
}
interface DataLevel extends NodeLocation {
  level: number;
  nodes: DataNode[];
  [key: string]: any;
}

interface DefaultBizData {
  title: string;
  desc: string;
}

type Data = DataLevel[];
interface Config extends ReturnType<typeof getConfig> {
  data: Data;
}

function createLevelFlowTree(customConfig: Config) {
  const config: Config = getConfig(customConfig);
  const { svgGroup, mountRoot } = init(config);

  const marginX = config.node.margin[0];
  const marginY = config.node.margin[1];
  const nodeW = config.node.width;
  const nodeH = config.node.height;
  const lineType = config.link.lineType;
  const data = config.data;

  // level group
  const offsetDelta = marginY + nodeH;
  const levelMiddleIndex = (data.length - 1) / 2;
  const levelEnter = svgGroup
    .selectAll("g.level-group")
    .data<DataLevel>(data)
    .enter()
    .append("g")
    .classed("level-group", true)
    .attr("level", (d) => d.level)
    .attr("transform", (d, levelIndex) => {
      const translateY = (levelIndex - levelMiddleIndex) * offsetDelta;
      d.x = 0;
      d.y = translateY;
      return `translate(0,${translateY})`;
    });

  // nodes and links
  levelEnter.each((levelData, levelIndex) => {
    // position
    const nodes = levelData.nodes;
    const offsetDelta = marginX + nodeW;
    const nodeMiddleIndex = (nodes.length - 1) / 2;
    const levelGroup = svgGroup.selectAll(
      `g.level-group[level="${levelData.level}"]`
    );
    const nodeEnter = levelGroup
      .selectAll<SVGGElement, DataLevel>("g.node")
      .data(nodes)
      .enter()
      .append("g")
      .classed("node", true)
      .attr("id", (d) => d.id)
      .attr("transform", (d, nodeIndex) => {
        const translateX = (nodeIndex - nodeMiddleIndex) * offsetDelta;
        d.x = translateX;
        d.y = levelData.y;
        return `translate(${translateX},0)`;
      });

    // node body
    nodeEnter
      .append("rect")
      .attr("width", nodeW)
      .attr("height", nodeH)
      .attr("x", -nodeW / 2)
      .attr("y", -nodeH / 2)
      .attr("rx", config.node.borderRadius)
      .attr("ry", config.node.borderRadius)
      .attr("fill", config.node.backgroundColor)
      .attr("stroke", config.node.strokeColor)
      .on("mouseenter", (d, i, g) => {
        const allDownNodeNames = [d.id];
        function traverse(nodes: DataNode[], cb: Function) {
          nodes.forEach((node) => {
            cb(node);
            if (node.downstreamNodes) {
              traverse(node.downstreamNodes, cb);
            }
          });
        }
        traverse(d.downstreamNodes, (node: DataNode) =>
          allDownNodeNames.push(node.id)
        );

        svgGroup
          .selectAll<SVGGElement, DataNode>("g.level-group > g.node")
          .filter((d) => allDownNodeNames.indexOf(d.id) > -1)
          .selectAll("rect")
          .attr("fill", config.theme.secondColor)
          .attr("stroke", config.theme.primaryColor);

        svgGroup
          .selectAll<SVGPathElement, any>("g.links-group > path")
          .classed("highlight", (_, lineIndex, lines) => {
            if (!lines) return false;
            // highlight all downstream line
            const sourceNodeName = lines[lineIndex]!.getAttribute(
              "source-node"
            );

            return sourceNodeName
              ? allDownNodeNames.indexOf(sourceNodeName) > -1
              : false;
            //   const targetNodeName = lines[lineIndex].getAttribute("target-node");
            // return sourceNodeName === d.id || targetNodeName === d.id;
          })
          .filter(".highlight")
          .raise()
          .attr("stroke-width", 1.5)
          .attr("stroke", config.theme.primaryColor);
      })
      .on("mouseleave", (d, i, g) => {
        svgGroup
          .selectAll("g.level-group > g.node > rect")
          .attr("fill", config.node.backgroundColor)
          .attr("stroke", config.node.strokeColor);
        svgGroup
          .selectAll("g.links-group > path")
          .filter(".highlight")
          .attr("stroke-width", 1)
          .attr("stroke", config.link.color)
          .classed("highlight", false);
      });

    nodeEnter
      .append("text")
      .attr("class", "node-title")
      .attr("x", 0)
      .attr("y", -10)
      .attr("text-anchor", "middle")
      .attr("fill", config.theme.primaryTextColor)
      .text((d) => {
        let title = (d.bizData || {}).title || "";
        title = title.length > 9 ? title.substr(0, 9) : title;
        return title;
      });
    nodeEnter
      .append("text")
      .attr("class", "node-desc")
      .attr("x", 0)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .attr("fill", config.theme.primaryTextColor)
      .text((d) => {
        let desc = (d.bizData || {}).desc || "";
        desc = desc.length > 9 ? desc.substr(0, 9) : desc;
        return desc;
      });
  });

  // make links when nodes are ready
  const linksGroup = svgGroup.append("g").classed("links-group", true);
  levelEnter.each((levelData, levelIndex) => {
    const levelNodes = svgGroup.selectAll<SVGGElement, DataNode>(
      `g.level-group[level="${levelData.level}"] > g`
    );
    // node links
    levelNodes.each((nodeData, nodeIndex) => {
      const links = nodeData.links;
      const targetNodes = getDownstreamNodes(levelIndex + 1, links);
      const upstreamNodes = getUpstreamNodes(levelIndex - 1, nodeData.id);
      nodeData.downstreamNodes = targetNodes;
      nodeData.upstreamNodes = upstreamNodes;
      targetNodes.forEach((targetData, i) => {
        const shrinkY = i * 0;
        const pathData = generatePathData(
          nodeData,
          targetData,
          lineType,
          shrinkY
        );
        if (pathData.length === 2) {
          const pathGroup = linksGroup.append("g");
          pathGroup
            .append("path")
            .attr("d", pathData[0])
            .attr("fill", "none")
            .attr("stroke", config.link.color)
            .attr("marker-end", "url(#arrow-end)");
          pathGroup
            .append("path")
            .attr("d", pathData[1])
            .attr("fill", "none")
            .attr("stroke", config.link.color)
            .attr("marker-end", "url(#arrow-end)");
        } else if (typeof pathData === "string") {
          linksGroup
            .append("path")
            .attr("d", pathData)
            .attr("fill", "none")
            .attr("stroke", config.link.color)
            .attr("marker-end", "url(#arrow-end)")
            .attr("source-node", nodeData.id)
            .attr("target-node", targetData.id);
        }
      });
    });
  });

  function generatePathData(
    ss: NodeLocation,
    dd: NodeLocation,
    lineType: LinkLineType,
    shrinkY: number = 0
  ) {
    const s = {
      x: ss.x,
      y: ss.y + nodeH / 2,
    };

    const d = {
      x: dd.x,
      y: dd.y - nodeH / 2,
    };

    switch (lineType) {
      case LinkLineType.Curve:
        return `M ${s.x} ${s.y} C${s.x} ${d.y},${d.x} ${s.y},${d.x} ${d.y}`;
      case LinkLineType.Line:
        return `M ${s.x} ${s.y} L ${d.x} ${d.y}`;
      case LinkLineType.Polyline:
        return `M${s.x} ${s.y} V${(d.y + s.y) / 2 + shrinkY} H${
          (d.x + s.x) / 2
        } H${d.x} V${d.y}`;
      case LinkLineType.PolylineApart:
        const m = {
          x: (s.x + d.x) / 2,
          y: (s.y + d.y) / 2 + shrinkY,
        };
        return [
          `M${s.x} ${s.y} V${m.y} H${m.x}`,
          `M${m.x} ${m.y} H${d.x} V${d.y}`,
        ];
      default:
        return [];
    }
  }

  function getDownstreamNodes(levelIndex: number, ids = [] as String[]) {
    if (levelIndex >= data.length) return [];
    const results = [];
    const nodes = data[levelIndex].nodes;
    for (let i = 0; i < nodes.length; i++) {
      if (ids.indexOf(nodes[i].id) > -1) {
        results.push(nodes[i]);
      }
    }
    return results;
  }

  function getUpstreamNodes(levelIndex: number, id: string) {
    if (levelIndex >= data.length || levelIndex < 0) return [];
    const results = [];
    const nodes = data[levelIndex].nodes;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].links.indexOf(id) > -1) {
        results.push(nodes[i]);
      }
    }
    return results;
  }
}

export { createLevelFlowTree };
