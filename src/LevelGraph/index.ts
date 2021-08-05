import * as d3 from 'd3v4';
import './index.scss'

const primaryColor = '#0084ff';
const secondColor = '#99ceff';
const primaryTextColor = '#333';
const secondTextColor = '#999';
const hintColor = '#ccc';
const primaryBackgroundColor = '#fff';

interface DataNode<T> {
  name: string;
  id: string;
  links?: string[];
  bizData: T;
}
interface DataLevel<T> {
  level: number;
  nodes: DataNode<T>[];
}

type Data = DataLevel<any>[];

// levelGraph config
const defaultConfig = {
  /** 绘制位置 */
  mountNodeSelector: '#app',
  data: [] as Data,
  theme: {
    primaryColor,
    primaryTextColor,
    primaryBackgroundColor,
    secondColor,
    secondTextColor,
    hintColor
  },
  svg: {
    /** background color */
    backgroundColor: primaryBackgroundColor,
    /** show background grid */
    gridOn: false,
    width: 800,
    height: 600
  },

  /** default react */
  node: {
    /** [horizontal, vertical] margin between nodes, px */
    margin: [60, 100],
    /** node width */
    width: 160,
    /** node height */
    height: 80,
    /** node stroke color */
    strokeColor: hintColor,
    /** node stroke width */
    strokeWidth: 1,
    /** node background color */
    backgroundColor: primaryBackgroundColor,
    /** node stroke color */
    borderRadius: 4,
    /** node custom render, function(n) {} */
    customRender: null
  },
  link: {
    color: hintColor,
    markerColor: primaryColor,
    lineType: 'polyline'
  }
};

function createLevelGraph(customConfig: typeof defaultConfig) {
  const config = { ...defaultConfig, ...customConfig };

  const mountNodeSelector = config.mountNodeSelector;
  let svgW = config.svg.width;
  let svgH = config.svg.height;

  const marginX = config.node.margin[0];
  const marginY = config.node.margin[1];
  const nodeW = config.node.width;
  const nodeH = config.node.height;
  const lineType = config.link.lineType;
  const data = config.data;

  const svg = d3
    .select(mountNodeSelector)
    .style('position', 'relative')
    .append('svg')
    .attr('width', svgW)
    .attr('height', svgH)
    .attr('id', 'treesvg')
    .attr('style', 'position: relative;z-index: 2;')
    .classed('level-graph', true);

  const svgGroup = svg
    .append('g')
    .attr('id', 'level-graph')
    .attr('transform', 'translate(' + svgW / 2 + ',' + svgH / 2 + ')');
  const zoom = d3
    .zoom()
    .on('zoom', () => {
      svgGroup.attr(
        'transform',
        d3.event.transform.translate(svgW / 2, svgH / 2)
      );
    }).scaleExtent([0, 5])

  svg.call(zoom);

  const toolButtons = [
    { icon: '+', label: '放大', type: 'zoomIn' },
    { icon: '-', label: '缩小', type: 'zoomOut' },
    { icon: '1:1', label: '恢复到1:1', type: 'zoomAuto' },
    { icon: '#', label: '背景网格', type: 'grid' }
  ];

  const toolBar = d3
    .select(mountNodeSelector)
    .append('div')
    .classed('toolbar', true)
    .selectAll('div')
    .data(toolButtons)
    .enter()
    .append('div')
    .classed('toolbar-button', true)
    .html((d) => d.icon)
    .attr('title', (d) => d.label)
    .on('click', (d, i, g) => {
      switch (d.type) {
        case 'zoomIn':
          zoom.scaleBy(svg, 1.2);
          break;
        case 'zoomOut':
          zoom.scaleBy(svg, 0.8);
          break;
        case 'zoomAuto':
          zoom.scaleTo(svg, 1);
          break;
        case 'grid':
          svg.classed('grid', !svg.classed('grid'));
          break;
      }
    });

  svg.append('defs').html(`
    <marker id="default-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#009999" stroke="none"/>
    </marker>
    <marker id="default-arrow-reverse" viewBox="0 0 10 10" refX="-10" refY="5" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M 10 0 L 0 5 L 10 10 z" fill="#009999" stroke="none"/>
    </marker>
    <marker id="default-arrow1" viewBox="0 0 10 10" refX="-10" refY="5" markerWidth="10" markerHeight="10" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 L 2 5 z" fill="blue" stroke="none"/>
    </marker>
`);

  // level group
  const distOfCenterX = marginY + nodeH;
  const totalHeight = data.length * (marginY + nodeH);
  const evenOffsetY = data.length % 2 === 0 ? -marginY / 2 : 0;
  const levelEnter = svgGroup
    .selectAll('g.level-group')
    .data(data)
    .enter()
    .append('g')
    .classed('level-group', true)
    .attr('level', (d) => d.level)
    .attr('transform', (d) => {
      const translateY =
        (d.level + 1) * (marginY + nodeH) - totalHeight / 2 + evenOffsetY;
      d.x = 0;
      d.y = translateY;
      return `translate(0,${translateY})`;
    });

  // nodes and links
  levelEnter.each((levelData, levelIndex) => {
    // position
    let index = 0;
    const nodes = levelData.nodes;
    const totalWidth = nodes.length * (marginX + nodeW);
    const offsetXForEven = nodes.length % 2 === 0 ? -marginX / 2 : 0;
    const levelGroup = svgGroup.selectAll(
      `g.level-group[level="${levelData.level}"]`
    );
    const nodeEnter = levelGroup
      .selectAll('g.node')
      .data(nodes, (d) => (d.index = index++))
      .enter()
      .append('g')
      .classed('node', true)
      .attr('id', (d) => d.name)
      .attr('transform', (d) => {
        const translateX =
          (d.index + 1) * (marginX + nodeW) - totalWidth / 2 + offsetXForEven;
        d.x = translateX;
        d.y = levelData.y;
        return `translate(${translateX},0)`;
      });

    // node body
    nodeEnter
      .append('rect')
      .attr('width', nodeW)
      .attr('height', nodeH)
      .attr('x', -nodeW / 2)
      .attr('y', -nodeH / 2)
      .attr('rx', 5)
      .attr('ry', 5)
      .attr('fill', '#fff')
      .attr('stroke', '#c9c9c9')
      .on('mouseenter', (d, i, g) => {
        const allDownNodeNames = [d.name];
        function traverse(nodes, cb) {
          nodes.forEach((node) => {
            cb(node);
            if (node.downstreamNodes) {
              traverse(node.downstreamNodes, cb);
            }
          });
        }
        traverse(d.downstreamNodes, (node) => allDownNodeNames.push(node.name));

        svgGroup
          .selectAll('g.level-group > g.node')
          .filter((d) => allDownNodeNames.indexOf(d.name) > -1)
          .selectAll('rect')
          .attr('fill', '#cee')
          .attr('stroke', '#009999');

        svgGroup
          .selectAll('g.links-group > path')
          .classed('highlight', (_, lineIndex, lines) => {
            // highlight all downstream line
            const sourceNodeName = lines[lineIndex].getAttribute('source-node');
            const targetNodeName = lines[lineIndex].getAttribute('target-node');
            return allDownNodeNames.indexOf(sourceNodeName) > -1;
            return sourceNodeName === d.name || targetNodeName === d.name;
          })
          .filter('.highlight')
          .raise();
      })
      .on('mouseleave', (d, i, g) => {
        svgGroup
          .selectAll('g.level-group > g.node > rect')
          .attr('fill', '#fff')
          .attr('stroke', '#c9c9c9');
        svgGroup.selectAll('g.links-group > path').classed('highlight', false);
      });

    nodeEnter
      .append('text')
      .attr('class', 'node-title')
      .attr('x', 0)
      .attr('y', -10)
      .attr('text-anchor', 'middle')
      .attr('fill', '#333')
      .text((d) => {
        let title = (d.bizData || {}).title || '';
        title = title.length > 9 ? title.substr(0, 9) : title;
        return title;
      });
    nodeEnter
      .append('text')
      .attr('class', 'node-desc')
      .attr('x', 0)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('fill', '#333')
      .text((d) => {
        let desc = (d.bizData || {}).desc || '';
        desc = desc.length > 9 ? desc.substr(0, 9) : desc;
        return desc;
      });
  });

  // make links when nodes are ready
  const linksGroup = svgGroup.append('g').classed('links-group', true);
  levelEnter.each((levelData, levelIndex) => {
    const levelNodes = svgGroup.selectAll(
      `g.level-group[level="${levelData.level}"] > g`
    );
    // node links
    levelNodes.each((nodeData, nodeIndex) => {
      const links = nodeData.links;
      const targetNodes = getDownstreamNodes(levelIndex + 1, links);
      const upstreamNodes = getUpstreamNodes(levelIndex - 1, nodeData.name);
      nodeData.downstreamNodes = targetNodes;
      nodeData.upstreamNodes = upstreamNodes;
      targetNodes.forEach((targetData, i) => {
        const shrinkY = i * 0;
        const lineType = 'polyline'; // curve polyline line polyline-apart
        const pathData = generatePathData(
          nodeData,
          targetData,
          lineType,
          shrinkY
        );
        if (pathData.length === 2) {
          const pathGroup = linksGroup.append('g');
          pathGroup
            .append('path')
            .attr('d', pathData[0])
            .attr('fill', 'none')
            .attr('stroke', '#9c9c9c')
            .attr('marker-end', 'url(#default-arrow)');
          pathGroup
            .append('path')
            .attr('d', pathData[1])
            .attr('fill', 'none')
            .attr('stroke', '#9c9c9c')
            .attr('marker-end', 'url(#default-arrow)');
        } else {
          linksGroup
            .append('path')
            .attr('d', pathData)
            .attr('fill', 'none')
            .attr('stroke', '#9c9c9c')
            .attr('marker-end', 'url(#default-arrow)')
            .attr('source-node', nodeData.name)
            .attr('target-node', targetData.name);
        }
      });

      //  path = `M${s.x} ${-s.y + 24} V${-(d.y + s.y) / 2} H${d.x} V${-d.y}`
    });
  });

  function generatePathData(ss, dd, lineType, shrinkY) {
    const s = {
      x: ss.x,
      y: ss.y + nodeH / 2
    };

    const d = {
      x: dd.x,
      y: dd.y - nodeH / 2
    };

    switch (lineType) {
      case 'curve':
        return `M ${s.x} ${s.y} C${s.x} ${d.y},${d.x} ${s.y},${d.x} ${d.y}`;
      case 'fancy-curve':
        return '';
      case 'line':
        return `M ${s.x} ${s.y} L ${d.x} ${d.y}`;
      case 'polyline':
        return `M${s.x} ${s.y} V${(d.y + s.y) / 2 + shrinkY} H${
          (d.x + s.x) / 2
        } H${d.x} V${d.y}`;
      case 'polyline-apart':
        const m = {
          x: (s.x + d.x) / 2,
          y: (s.y + d.y) / 2 + shrinkY
        };
        return [
          `M${s.x} ${s.y} V${m.y} H${m.x}`,
          `M${m.x} ${m.y} H${d.x} V${d.y}`
        ];
    }
  }

  function getDownstreamNodes(levelIndex, ids = []) {
    if (levelIndex >= data.length) return [];
    const results = [];
    const nodes = data[levelIndex].nodes;
    for (let i = 0; i < nodes.length; i++) {
      if (ids.indexOf(nodes[i].name) > -1) {
        results.push(nodes[i]);
      }
    }
    return results;
  }

  function getUpstreamNodes(levelIndex, id) {
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
export { createLevelGraph };
