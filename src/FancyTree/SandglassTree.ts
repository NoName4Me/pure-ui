/**!
 * Sandglass Tree
 *
 *   o   o   o
 *   |___|  _|
 *     |   |
 *     o   o
 *     |___|
 *       |
 *       o  <-- root
 *      _|_
 *     |   |
 *     o   o
 *
 */

import * as d3 from 'd3';
import { getConfig, init, LinkLineType } from './common';

import './index.scss';

// 过渡时间
const DURATION = 200;
// 加减符号半径
const SYMBOLA_S_R = 9;
// 公司
const COMPANY = 0;
// 人
const PERSON = 1;

const CURVE_RATE = 0;

const DEFAULT_STYLE = {
  primaryColor: '#0084ff',

  root: {
    type: 'rect',
    borderColor: '#0084ff',
    backgroundColor: '#0084ff',
    borderWidth: 2
  },
  node: {
    type: 'rect',
    borderColor: '#c8c8c8',
    backgroundColor: '#fff',
    borderWidth: 2,
    textColor: '#333'
  },
  link: {
    color: '#c8c8c8',
    markerColor: '#0084ff',
    width: 1
  }
};
interface NodeLocation {
  x: number;
  y: number;
}
interface DefaultBizData {
  title: string;
  desc: string;
  hoverCallback?: (event: MouseEvent, node: HierarchyPointNode) => {};
  linkLabelRight?: string;
}
interface DataNode extends NodeLocation {
  id: string;
  links: string[];
  bizData: DefaultBizData;
  children: DataNode[] | null;
  hasChildren: boolean;
  [key: string]: any;
}

interface Data extends DataNode {
  parents: DataNode[] | null;
}

interface Config extends ReturnType<typeof getConfig> {
  data: Data;
}

enum TreeDirection {
  Up = 'up',
  Down = 'down'
}

type HierarchyNode = d3.HierarchyNode<DataNode>;
type HierarchyPointNode = d3.HierarchyPointNode<DataNode>;

function createSandglassTree(customConfig: Config) {
  const config: Config = getConfig(customConfig);
  const { svgGroup, svg, mountRoot } = init(config);
  const data = config.data;
  const marginX = config.node.margin[0];
  const marginY = config.node.margin[1];
  const nodeW = config.node.width;
  const nodeH = config.node.height;
  const rootNodeW = config.rootNode.width || config.node.width;
  const rootNodeH = nodeH;
  const hasChildNodeArr: HierarchyNode[] = [];
  let idIndex = 0;

  // d3.tree generate layouted nodes
  const layoutTree = d3
    .tree<DataNode>()
    .nodeSize([marginX + nodeW, marginY + nodeH])
    .separation(() => 1);

  // init up/down tree
  let upTree: DataNode = {
    ...data,
    parents: null,
    children: data.parents
  };
  let downTree: DataNode = {
    ...data,
    parents: null,
    children: data.children
  };

  let upTreeRoot: HierarchyNode;
  let downTreeRoot: HierarchyNode;

  function hierachy(isFirstRun = false) {
    // hierarchy generate
    upTreeRoot = d3.hierarchy<DataNode>(upTree, (d) => d.children);
    // upTreeRoot.data.x = 0;
    // upTreeRoot.data.y = 0;
    downTreeRoot = d3.hierarchy<DataNode>(downTree, (d) => d.children);
    // downTreeRoot.data.x = 0;
    // downTreeRoot.data.y = 0;

    // 上 和 下 结构
    let treeArr = [
      {
        data: upTreeRoot!,
        type: TreeDirection.Up
      },
      {
        data: downTreeRoot!,
        type: TreeDirection.Down
      }
    ];

    function traverse(node: HierarchyNode, condition: Function, cb: Function) {
      cb(node);
      if (node.children && condition(node)) {
        node.children.forEach((item) => traverse(item, cb, condition));
      }
    }

    //TODO: collapse specified height nodes
    treeArr.map((item) => {
      if (item.data.children) {
        if (isFirstRun) {
          traverse(
            item.data,
            (node: HierarchyNode) => node.depth <= config.initialExpandDepth,
            (node: HierarchyNode) => {
              if (node.depth === config.initialExpandDepth) {
                collapse(node);
              } else {
                node.data.isOpen = true;
              }
            }
          );
        } else {
          traverse(
            item.data,
            (node: HierarchyNode) => true,
            (node: HierarchyNode) => {
              node.depth && node.data.isOpen === false && collapse(node);
            }
          );
        }
        // item.data.children.forEach((d) => collapse(d));
        update(item.data as HierarchyPointNode, item.type, item.data);
      }
    });
  }

  hierachy(true);

  function update(
    source: HierarchyPointNode,
    direction: TreeDirection,
    sourceTree: HierarchyNode
  ) {
    const isUpward = direction === TreeDirection.Up;

    let nodes: d3.HierarchyPointNode<DataNode>[];
    if (direction === TreeDirection.Up) {
      nodes = layoutTree(upTreeRoot).descendants();
    } else {
      nodes = layoutTree(downTreeRoot).descendants();
    }
    let links = nodes.slice(1);
    nodes.forEach((d) => {
      // d.data.y = d.depth * (marginY + nodeH);
    });

    let node = svgGroup
      .selectAll<SVGGElement, DataNode>('g.node' + direction)
      .data(nodes, (d) => d.data.id || (d.data.id = direction + ++idIndex));

    let nodeEnter = node
      .enter()
      .append('g')
      .attr('class', (d) =>
        isUpward && !d.depth ? 'hide-node nodeup' : 'node' + direction
      )
      .attr('transform', (d) => `translate(${d.x},${isUpward ? -d.y : d.y})`);

    // 创建节点（主框体）
    nodeEnter
      .append('rect')
      .attr('type', (d) => d.data.id)
      .attr('width', (d) => (d.depth ? nodeW : config.rootNode.width || nodeW))
      .attr('height', (d) =>
        d.depth ? nodeH : config.rootNode.height || nodeH
      )
      .attr('x', (d) => -(d.depth ? nodeW : config.rootNode.width || nodeW) / 2)
      .attr(
        'y',
        (d) => -(d.depth ? nodeH : config.rootNode.height || nodeH) / 2
      )
      .attr('stroke', (d) =>
        d.depth ? config.node.strokeColor : config.rootNode.strokeColor
      )
      .attr('stroke-width', config.rootNode.strokeWidth)
      .attr('rx', 4)
      .attr('ry', 4)
      .style('fill', (d) =>
        d.depth ? config.node.backgroundColor : config.rootNode.backgroundColor
      )
      .on('mouseenter', (d, i, g) => {
        const event = d3.event;
        if (d.data.bizData?.hoverCallback) {
          d.data._destroyHoverInfo = d.data.bizData.hoverCallback(event, d);
        }
        if (!d.depth) return;
        // shoe up/down
      })
      .on('mouseleave', (d) => {
        if (typeof d.data._destroyHoverInfo === 'function') {
          d.data._destroyHoverInfo();
        }
      });

    // collapse button
    nodeEnter
      .append('use')
      .attr('type', (d) => d.data.id)
      .attr('x', -10)
      .attr('y', (d) =>
        direction === TreeDirection.Up ? -nodeH / 2 - 20 : nodeH / 2
      )
      .attr('href', (d) =>
        !(d.data.children || d.data.getChildren) || !d.depth
          ? null
          : d.data.isOpen
          ? '#circle-minus'
          : '#circle-plus'
      )

      // nodeEnter.merge(node).selectAll<SVGUseElement, HierarchyPointNode>('use')
      .on('click', async function (d) {
        d.data.isOpen = !d.data.isOpen;

        if (!d.data.children && d.data.getChildren) {
          this.setAttribute('href', '#circle-loading');
          const children: DataNode[] = await d.data.getChildren(d);
          d.data.children = children;
          // hierachy()
          // d.data._children = generateHierachy(d, d.data.children);
          d.data._children = children.map((item) => {
            return {
              data: item,
              depth: d.depth + 1,
              height: 0,
              parent: d
            } as HierarchyPointNode;
          });
          this.setAttribute('href', '#circle-minus');
        }
        this.setAttribute(
          'href',
          d.data.isOpen ? '#circle-minus' : '#circle-plus'
        );
        // 不是起点才能点
        if (d.depth) {
          if (d.children) {
            d.data._children = d.children;
            d.children = undefined;
          } else {
            d.children = d.data._children;
            d.data._children = undefined;
          }
          update(d, direction, sourceTree);
        }
      });

    // 持股比例
    nodeEnter
      .append('g')
      .attr('class', 'node-link-label')
      .attr('transform', () => 'translate(0,0)')
      .append('text')
      .attr('x', (d) => (d.x > 0 ? (direction === 'up' ? -30 : 30) : 30))
      .attr('y', isUpward ? nodeH / 2 + 20 : -nodeH / 2 - 10)
      .attr('text-anchor', 'middle')
      .attr('fill', (d) => (d.data.type === COMPANY ? '#FD7D00' : '#7A9EFF'))
      .text((d) => (d.depth ? d.data.bizData?.linkLabelRight || '' : ''));

    // 公司名称
    // y轴 否表源头的字体距离
    nodeEnter
      .append('text')
      .attr('class', 'node-title')
      .attr('x', 0)
      .attr('y', direction === 'up' ? 0 : 0)
      .attr('text-anchor', 'middle')
      .attr(
        'style',
        (d) =>
          'fill:' +
          (d.depth ? config.theme.primaryTextColor : config.rootNode.textColor)
      )
      .text((d) => {
        let title = d.data.bizData?.title || '';
        title = title.length > 8 ? title.substr(0, 8) : title;
        return title;
      });

    // 名称过长 第二段
    nodeEnter
      .append('text')
      .attr('class', 'node-title')
      .attr('x', 0)
      .attr('y', 0)
      .attr('dy', '1.2em')
      .attr('text-anchor', 'middle')
      .attr('fill', (d) =>
        d.depth ? config.theme.primaryTextColor : config.rootNode.textColor
      )
      .text((d) => {
        const title = d.data.bizData?.title || '';
        return title.slice(8);
      });

    // bizData.desc
    nodeEnter
      .append('text')
      .attr('class', 'node-desc')
      .attr('x', 0)
      .attr('y', 0)
      .attr('dy', '1.8em')
      .attr('text-anchor', 'middle')
      .attr('fill', (d) => (d.depth ? '#465166' : '#fff'))
      .text((d) => d.data.bizData?.desc || '');

    // 将节点转换到它们的新位置。
    let nodeUpdate = node
      .transition()
      .duration(DURATION)
      .attr('transform', (d) =>
        direction === 'up'
          ? 'translate(' + d.x + ',' + -d.y + ')'
          : 'translate(' + d.x + ',' + d.y + ')'
      );

    // 修改线条
    let link = svgGroup
      .selectAll<SVGPathElement, DataNode>('path.link' + direction)
      .data(links, (d) => d.data.id);

    // 在父级前的位置画线。
    let linkEnter = link
      .enter()
      .insert('path', 'g')
      .attr('class', 'link' + direction)
      .attr('marker-start', `url(#arrow-start${isUpward ? '' : '-reverse'})`) // 根据箭头标记的id号标记箭头
      .attr('stroke', config.link.color)
      .attr('fill', 'none')
      .style('fill-opacity', 1);

    let linkUpdateAndEnter = linkEnter.merge(link);
    // 过渡更新位置.
    linkUpdateAndEnter
      .transition()
      .duration(DURATION)
      .attr('d', (d) => diagonal(d, d.parent, direction));

    //  delete or collapse nodes/links move under parent
    node
      .exit()
      .transition()
      .duration(DURATION)
      .attr('opacity', 0)
      .attr(
        'transform',
        () => `translate(${source.x},${isUpward ? -source.y : source.y})`
      )
      .remove();
    // 将退出节点转换到父节点的新位置
    link
      .exit()
      .transition()
      .attr('opacity', 0)
      .duration(DURATION / 2)
      .attr('d', () => {
        return diagonal(source, source, direction);
      })
      .remove();

    // 隐藏旧位置方面过渡.
    // nodes.forEach((d) => {
    //   d.data.x0 = d.x;
    //   d.data.y0 = d.y;
    // });
  }
  function diagonal(
    ss: HierarchyPointNode,
    dd: HierarchyPointNode | null,
    direction: TreeDirection,
    lineType: LinkLineType = LinkLineType.Polyline
  ) {
    if (!dd) return '';

    const s = { x: ss.x, y: ss.y - (ss.depth ? nodeH / 2 : rootNodeH / 2) };
    const d = { x: dd.x, y: dd.y + (dd.depth ? nodeH / 2 : rootNodeH / 2) };

    let path;
    // 曲线
    if (lineType === LinkLineType.Curve) {
      if (direction === TreeDirection.Up) {
        path = `M ${s.x} ${-s.y} C${s.x} -${(s.y + d.y) * CURVE_RATE},${s.x} -${
          (s.y + d.y) * CURVE_RATE
        },${d.x} -${d.y}`;
      } else {
        path = `M ${s.x} ${s.y}C${s.x} ${(s.y + d.y) * CURVE_RATE},${s.x} ${
          (s.y + d.y) * CURVE_RATE
        },${d.x} ${d.y}`;
      }
      return path;
    }

    // 默认双折线
    // o
    // |___
    //     |
    //     v
    if (direction === TreeDirection.Up) {
      path = `M${s.x} ${-s.y} V${-(d.y + s.y) / 2} H${d.x} V${-d.y}`;
    } else {
      path = `M${s.x} ${s.y} V${(d.y + s.y) / 2} H${d.x} V${d.y}`;
    }

    return path;
  }

  function collapse(source: HierarchyNode) {
    if (source.children) {
      source.data._children = source.children;
      source.data._children.forEach(collapse);
      source.children = undefined;
      source.data.isOpen = false;
      hasChildNodeArr.push(source);
    }
  }
}

export { createSandglassTree };

function generateHierachy(parent: HierarchyPointNode, node: DataNode[] | null) {
  if (!node) return;
  return node.map((item) => {
    return {
      data: item,
      depth: parent.depth + 1,
      height: 0
    } as HierarchyPointNode;
  });
}
