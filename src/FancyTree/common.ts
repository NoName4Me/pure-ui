import merge from 'merge';
import * as d3 from 'd3';
import { Icon, IconType } from './Icon';

const primaryColor = '#0084ff';
const secondColor = '#cce6ff';
const primaryTextColor = '#333';
const secondTextColor = '#999';
const hintColor = '#ccc';
const primaryBackgroundColor = '#fff';

const defaultTheme = {
  primaryColor,
  primaryTextColor,
  primaryBackgroundColor,
  secondColor,
  secondTextColor,
  hintColor
};

export function getConfig(customConfig: any) {
  const fullTheme = { ...defaultTheme, ...customConfig.theme };
  const defaultConfig = {
    /** 绘制位置 */
    mountNodeSelector: '#app',
    theme: fullTheme,
    /** for sandglass tree only */
    initialExpandDepth: 1,
    showToolbar: true,
    initialScale: 1,
    /** show background grid */
    showBackgroundGrid: false,
    width: 800,
    height: 600,
    /** background color */
    backgroundColor: fullTheme.primaryBackgroundColor,
    /** default react */
    rootNode: {
      width: 300,
      height: 60,
      backgroundColor: fullTheme.primaryColor,
      strokeWidth: 1,
      strokeColor: fullTheme.primaryColor,
      textColor: fullTheme.primaryBackgroundColor
    },
    node: {
      /** [horizontal, vertical] margin between nodes, px */
      margin: [50, 80],
      /** node width */
      width: 120,
      /** node height */
      height: 60,
      /** node stroke color */
      strokeColor: fullTheme.hintColor,
      /** node stroke width */
      strokeWidth: 1,
      /** node background color */
      backgroundColor: fullTheme.primaryBackgroundColor,
      /** node stroke color */
      borderRadius: 4,
      /** node custom render, function(n) {} */
      customRender: null
    },
    link: {
      color: fullTheme.hintColor,
      markerColor: fullTheme.primaryColor,
      lineType: LinkLineType.Polyline
    }
  };

  return merge.recursive(true, defaultConfig, customConfig);
}

export enum LinkLineType {
  Polyline = 'polyline',
  PolylineApart = 'polyline-apart',
  Curve = 'curve',
  Line = 'line'
}

export function init(config: ReturnType<typeof getConfig>) {
  const mountNodeSelector = config.mountNodeSelector;
  let svgW = config.width;
  let svgH = config.height;

  const mountRoot = d3
    .select<HTMLElement, any>(mountNodeSelector)
    .style('position', 'relative');
  const svg = mountRoot
    .append('svg')
    .attr('id', 'fancy-tree')
    .attr('width', svgW)
    .attr('height', svgH)
    .attr('style', 'position: relative;z-index: 2;')
    .style('background-color', config.backgroundColor)
    .classed('grid', config.showBackgroundGrid)
    .classed('fancy-tree', true);

  const svgGroup = svg
    .append('g')
    .attr('transform', 'translate(' + svgW / 2 + ',' + svgH / 2 + ')');
  const zoom = d3
    .zoom<SVGSVGElement, any>()
    .scaleExtent([0.2, 3])
    .on('zoom', () => {
      svgGroup.attr(
        'transform',
        d3.event.transform.translate(svgW / 2, svgH / 2)
      );
    });

  svg.call(zoom);

  zoom.scaleTo(svg, config.initialScale);

  const toolButtons = [
    { label: '放大', type: IconType.ZoomIn },
    { label: '缩小', type: IconType.ZoomOut },
    { label: '恢复到1:1', type: IconType.ZoomReset },
    // { label: '下载图片到本地', type: IconType.Download }
    // { label: '背景网格', type: IconType.Grid }
  ];

  config.showToolbar &&
    d3
      .select(mountNodeSelector)
      .append('div')
      .classed('toolbar', true)
      .selectAll('div')
      .data(toolButtons)
      .enter()
      .append('div')
      .classed('toolbar-button', true)
      .html((d) => Icon[d.type])
      .attr('title', (d) => d.label)
      .on('click', (d, i, g) => {
        switch (d.type) {
          case IconType.ZoomIn:
            zoom.scaleBy(svg, 1.2);
            break;
          case IconType.ZoomOut:
            zoom.scaleBy(svg, 0.8);
            break;
          case IconType.ZoomReset:
            zoom.scaleTo(svg, 1);
            break;
          case IconType.Grid:
            svg.classed('grid', !svg.classed('grid'));
            break;
        }
      });
  svg.append('defs').html(`
<marker id="arrow-end" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto">
  <path d="M 0 0 L 10 5 L 0 10 z" fill=${config.link.markerColor} stroke="none"/>
</marker>
<marker id="arrow-start" viewBox="0 0 10 10" refX="-10" refY="5" markerWidth="10" markerHeight="10" orient="auto">
    <path d="M 0 0 L 10 5 L 0 10 z" fill="${config.link.markerColor}" stroke="none"/>
</marker>
<marker id="arrow-start-reverse" viewBox="0 0 10 10" refX="-10" refY="5" markerWidth="10" markerHeight="10" orient="auto">
    <path d="M 10 0 L 0 5 L 10 10 z" fill="${config.link.markerColor}" stroke="none"/>
</marker>
<symbol id="circle-plus">
    <circle cx="10" cy="10" r="9" stroke="${config.link.markerColor}" fill="${config.link.markerColor}"/>
    <path d="M4 10 H16" fill="#fff" stroke="#fff" />
    <path d="M10 4 V16" fill="#fff" stroke="#fff" />
</symbol>
<symbol id="circle-minus">
    <circle cx="10" cy="10" r="9" stroke="${config.link.markerColor}" fill="#fff"/>
    <path d="M4 10 H16" stroke="${config.link.markerColor}" />
</symbol>
<symbol id="circle-loading">
  <circle cx="10" cy="10" r="8" stroke-width="2" stroke="${config.link.markerColor}" stroke-dasharray="12 12" fill="none" stroke-linecap="round">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 10 10;360 10 10"></animateTransform>
  </circle>
</symbol>

`);

  return {
    mountRoot,
    svg,
    svgGroup
  };
}
