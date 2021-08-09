/*! For license information please see main.69524d97.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{288:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(448),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(449),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"#fancy-tree{user-select:none}#fancy-tree.grid{background:linear-gradient(90deg, transparent 10px, #ccc 11px, transparent 11px),linear-gradient(0deg, transparent 10px, #ccc 11px, transparent 11px);background-size:20px 20px}#fancy-tree .nodeup text,#fancy-tree .node text,#fancy-tree .nodedown text{pointer-events:none}#fancy-tree .nodeup text.node-title,#fancy-tree .node text.node-title,#fancy-tree .nodedown text.node-title{font-size:14px;font-weight:bold;fill:#333}#fancy-tree .nodeup text.node-desc,#fancy-tree .node text.node-desc,#fancy-tree .nodedown text.node-desc{font-size:12px;fill:#999}#fancy-tree .nodeup .node-link-label,#fancy-tree .node .node-link-label,#fancy-tree .nodedown .node-link-label{font-size:12px}#fancy-tree+.toolbar{position:absolute;left:20px;top:40px;z-index:10;box-sizing:border-box;width:40px;border:1px solid #ddd;box-shadow:4px 2px 8px 0 rgba(0,0,0,.1);background-color:#fff}#fancy-tree+.toolbar .toolbar-button{width:40px;height:40px;color:#333;cursor:pointer;text-align:center;line-height:40px;font-size:20px}#fancy-tree+.toolbar .toolbar-button+.toolbar-button{border-top:1px dashed #ccc}#fancy-tree+.toolbar .toolbar-button:hover{background-color:#cce6ff}#fancy-tree .hide-node{display:none}","",{version:3,sources:["webpack://./src/FancyTree/index.scss"],names:[],mappings:"AAAA,YACE,gBAAA,CACA,iBACE,qJAAA,CAOA,yBAAA,CAOA,2EACE,mBAAA,CAEF,4GACE,cAAA,CACA,gBAAA,CACA,SAAA,CAEF,yGACE,cAAA,CACA,SAAA,CAEF,+GACE,cAAA,CAIJ,qBACE,iBAAA,CACA,SAAA,CACA,QAAA,CACA,UAAA,CACA,qBAAA,CACA,UAAA,CACA,qBAAA,CACA,uCAAA,CACA,qBAAA,CACA,qCACE,UAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CAEF,qDACE,0BAAA,CAEF,2CACE,wBAAA,CAKJ,uBACE,YAAA",sourcesContent:["#fancy-tree {\r\n  user-select: none;\r\n  &.grid {\r\n    background: linear-gradient(\r\n        90deg,\r\n        transparent 10px,\r\n        #ccc 11px,\r\n        transparent 11px\r\n      ),\r\n      linear-gradient(0deg, transparent 10px, #ccc 11px, transparent 11px);\r\n    background-size: 20px 20px;\r\n  }\r\n  \r\n  /*text styles */\r\n  .nodeup,\r\n  .node,\r\n  .nodedown {\r\n    text {\r\n      pointer-events: none;\r\n    }\r\n    text.node-title {\r\n      font-size: 14px;\r\n      font-weight: bold;\r\n      fill: #333;\r\n    }\r\n    text.node-desc {\r\n      font-size: 12px;\r\n      fill: #999;\r\n    }\r\n    .node-link-label {\r\n      font-size: 12px;\r\n    }\r\n  }\r\n\r\n  & + .toolbar {\r\n    position: absolute;\r\n    left: 20px;\r\n    top: 40px;\r\n    z-index: 10;\r\n    box-sizing: border-box;\r\n    width: 40px;\r\n    border: 1px solid #ddd;\r\n    box-shadow: 4px 2px 8px 0 rgba(0, 0, 0, 0.1);\r\n    background-color: white;\r\n    .toolbar-button {\r\n      width: 40px;\r\n      height: 40px;\r\n      color: #333;\r\n      cursor: pointer;\r\n      text-align: center;\r\n      line-height: 40px;\r\n      font-size: 20px;\r\n    }\r\n    .toolbar-button + .toolbar-button {\r\n      border-top: 1px dashed #ccc;\r\n    }\r\n    .toolbar-button:hover {\r\n      background-color: #cce6ff;\r\n    }\r\n  }\r\n\r\n  //\r\n  .hide-node {\r\n    display: none;\r\n  }\r\n  \r\n}"],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},444:function(module){module.exports=JSON.parse('[{"level":0,"nodes":[{"id":"level0-0","bizData":{"title":"第1层第1个节点","desc":"详细的描述文字"},"links":["level1-0","level1-1"]},{"id":"level0-1","bizData":{"title":"第1层第2个节点","desc":"详细的描述文字"},"links":["level1-1"]},{"id":"level0-2","bizData":{"title":"第1层第3个节点","desc":"详细的描述文字"},"links":["level1-2"]},{"id":"level0-3","bizData":{"title":"第1层第4个节点","desc":"详细的描述文字"},"links":["level1-2"]},{"id":"level0-4","links":["level1-3"]}]},{"level":1,"nodes":[{"id":"level1-0","links":["level2-1","level2-2"]},{"id":"level1-1","links":["level2-1"]},{"id":"level1-2","links":["level2-2"]},{"id":"level1-3","links":["level2-2"]}]},{"level":2,"nodes":[{"id":"level2-0","links":["level3-0"]},{"id":"level2-1","links":["level3-0"]},{"id":"level2-2","links":["level3-0"]}]},{"level":3,"nodes":[{"id":"level3-0"}]}]')},445:function(module){module.exports=JSON.parse('{"children":[{"bizData":{"title":"这个公司名字超级超级超级长哦"}},{"children":[{"children":[{"children":[{"bizData":{"title":"小小公司"}}],"bizData":{"title":"小小公司"}}],"bizData":{"title":"小公司"}},{"bizData":{"title":"小公司2"}}],"bizData":{"title":"打酱油的公司","desc":"快黄了","linkLabelRight":"50%"}},{"children":[{"bizData":{"title":"小公司"}},{"bizData":{"title":"小公司2"}}],"bizData":{"title":"拼刀刀2333","linkLabelRight":"30%"}},{"bizData":{"title":"拼刀刀2222","linkLabelRight":"20%"}}],"parents":[{"children":[{"children":[{"bizData":{"title":"123","desc":"780万元"}}],"bizData":{"title":"发发委"}},{"children":[{"bizData":{"desc":"780万元","title":"123"}}],"bizData":{"title":"123发发委"}}],"bizData":{"title":"大公司"}},{"money":"780万元","children":[{"money":"780万元","bizData":{"title":"发哈哈"}}],"bizData":{"title":"多多网"}},{"money":"780万元","children":[{"money":"780万元","bizData":{"title":"王林"}},{"money":"780万元","bizData":{"title":"张峰"}},{"money":"780万元","bizData":{"title":"侯明"}}],"bizData":{"title":"投了个资的"}}],"bizData":{"title":"超级大公司"}}')},480:function(module,exports,__webpack_require__){__webpack_require__(481),__webpack_require__(639),__webpack_require__(640),__webpack_require__(831),__webpack_require__(837),__webpack_require__(838),__webpack_require__(839),__webpack_require__(836),__webpack_require__(833),__webpack_require__(840),__webpack_require__(834),__webpack_require__(835),__webpack_require__(841),module.exports=__webpack_require__(826)},548:function(module,exports){},640:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(336)},826:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(336).configure)([__webpack_require__(827),__webpack_require__(828)],module,!1)}).call(this,__webpack_require__(187)(module))},827:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=827},828:function(module,exports,__webpack_require__){var map={"./FancyTree/FancyTree.stories.ts":832};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=828},832:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LevelFlowTree",(function(){return LevelFlowTree})),__webpack_require__.d(__webpack_exports__,"SandglassTree",(function(){return SandglassTree})),__webpack_require__.d(__webpack_exports__,"SandglassTreeHoverInfo",(function(){return SandglassTreeHoverInfo})),__webpack_require__.d(__webpack_exports__,"SandglassTreeLazyLoad",(function(){return SandglassTreeLazyLoad}));__webpack_require__(421),__webpack_require__(15),__webpack_require__(829);var _Icon,IconType,level_flow=__webpack_require__(444),sandglass=__webpack_require__(445),sandglass_hover={children:[{bizData:{title:"这个公司名字超级超级超级长哦"},hoverCallback:function hoverCallback(event,node){var rect=event.target.getBoundingClientRect(),div=document.createElement("div");return div.style.position="fixed",div.style.left=rect.right+"px",div.style.top=rect.bottom+"px",div.style.width="320px",div.style.height="200px",div.style.border="1px solid gray",div.style.zIndex="9",div.style.background="#fff",div.innerHTML="\n        <div>\n          <h3>悬浮时自定义渲染一个弹层</h3>\n          <h4>"+node.data.bizData.title+"</h4>\n          <p>"+(node.data.bizData.desc||"")+"</p>\n        </div>",document.body.append(div),function(){return document.body.removeChild(div)}}},{children:[{children:[{children:[{bizData:{title:"小小公司"}}],bizData:{title:"小小公司"}}],bizData:{title:"小公司"}},{bizData:{title:"小公司2"}}],bizData:{title:"打酱油的公司",desc:"快黄了"}},{children:[{bizData:{title:"小公司"}},{bizData:{title:"小公司2"}}],bizData:{title:"拼刀刀2333"}},{bizData:{title:"拼刀刀2222"}}],parents:[{children:[{children:[{bizData:{title:"123",desc:"780万元"}}],bizData:{title:"发发委"}},{children:[{bizData:{desc:"780万元",title:"123"}}],bizData:{title:"123发发委"}}],bizData:{title:"大公司"}},{money:"780万元",children:[{money:"780万元",bizData:{title:"发哈哈"}}],bizData:{title:"多多网"}},{money:"780万元",children:[{money:"780万元",bizData:{title:"王林"}},{money:"780万元",bizData:{title:"张峰"}},{money:"780万元",bizData:{title:"侯明"}}],bizData:{title:"投了个资的"}}],bizData:{title:"超级大公司"}},sandglass_lazy_load=(__webpack_require__(52),__webpack_require__(8),{children:[{bizData:{title:"这个公司名字超级超级超级长哦"},getChildren:function getChildren(node){return new Promise((function(resolve,reject){setTimeout((function(){resolve([{bizData:{title:"异步请求到的公司1"}},{bizData:{title:"异步请求到的公司2",desc:"看我厉害吧"}}])}),2e3)}))}},{children:[{bizData:{title:"小公司"}},{bizData:{title:"小公司2"}}],bizData:{title:"拼刀刀2333"}},{bizData:{title:"拼刀刀2222"}}],parents:[{children:[{children:[{bizData:{title:"123",desc:"780万元"}}],bizData:{title:"发发委"}},{children:[{bizData:{desc:"780万元",title:"123"}}],bizData:{title:"123发发委"}}],bizData:{title:"大公司"}},{children:[{money:"780万元",bizData:{title:"王林"}},{money:"780万元",bizData:{title:"张峰"}},{money:"780万元",bizData:{title:"侯明"}}],bizData:{title:"投了个资的"}}],bizData:{title:"超级大公司"}}),src=(__webpack_require__(282),__webpack_require__(281),__webpack_require__(41),__webpack_require__(48),__webpack_require__(830),__webpack_require__(446)),src_default=__webpack_require__.n(src),d3=__webpack_require__(83);!function(IconType){IconType.ZoomOut="zoomOut",IconType.ZoomIn="zoomIn",IconType.ZoomReset="zoomReset",IconType.Grid="grid",IconType.Download="download"}(IconType||(IconType={}));var LinkLineType,Icon=((_Icon={})[IconType.Grid]='<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M656.896 857.6V203.776c0-16.896 13.824-30.72 30.72-30.72s30.72 13.824 30.72 30.72V857.6c0 16.896-13.824 30.72-30.72 30.72s-30.72-13.824-30.72-30.72zm-351.232 0V203.776c0-16.896 13.824-30.72 30.72-30.72s30.72 13.824 30.72 30.72V857.6c0 16.896-13.824 30.72-30.72 30.72-17.408 0-30.72-13.824-30.72-30.72zm532.992-472.064H185.344c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h653.824c16.896 0 30.72 13.824 30.72 30.72-.512 16.896-14.336 30.72-31.232 30.72zm0 351.744H185.344c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h653.824c16.896 0 30.72 13.824 30.72 30.72-.512 16.896-14.336 30.72-31.232 30.72z"/></svg>',_Icon[IconType.ZoomOut]='<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M919.264 905.984L780.352 767.072C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 .032-45.248zM128 480c0-194.08 157.92-352 352-352s352 157.92 352 352-157.92 352-352 352-352-157.92-352-352zm497.792-32H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z"/></svg>',_Icon[IconType.ZoomIn]='<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M919.264 905.984L780.352 767.072C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 .032-45.248zM128 480c0-194.08 157.92-352 352-352s352 157.92 352 352-157.92 352-352 352-352-157.92-352-352zm497.792-32H512V336a32 32 0 0 0-64 0v112H336a32 32 0 0 0 0 64h112v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z"/></svg>',_Icon[IconType.ZoomReset]='<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M1009.3 960.3l-132-132c33.4-38.4 60.3-81.6 80.2-128.6 25.3-59.7 38.1-123.1 38.1-188.5s-12.8-128.8-38.1-188.5c-24.4-57.7-59.3-109.4-103.8-153.9S757.5 89.4 699.8 65c-59.7-25.3-123.1-38.1-188.5-38.1s-128.7 13-188.4 38.2C265.2 89.5 213.5 124.4 169 168.9S89.6 265.1 65.2 322.8c-25.2 59.7-38 123.1-38 188.5S40 640 65.2 699.8c24.4 57.7 59.3 109.4 103.8 153.9s96.2 79.4 153.9 103.8c59.7 25.3 123.1 38.1 188.5 38.1s128.8-12.8 188.5-38.1c46.2-19.5 88.5-45.8 126.4-78.3l132.1 132.1c7 7 16.2 10.5 25.5 10.5s18.4-3.5 25.5-10.5c14-14.1 14-36.9-.1-51zm-337.5-69.2C621 912.6 567 923.5 511.4 923.5S401.7 912.6 351 891.1c-49.1-20.8-93.2-50.5-131-88.4-37.9-37.9-67.6-82-88.4-131-21.5-50.8-32.4-104.8-32.4-160.4s10.9-109.6 32.4-160.4c20.8-49.1 50.5-93.2 88.4-131 37.9-37.9 82-67.6 131-88.4 50.8-21.5 104.8-32.4 160.4-32.4S621 110 671.8 131.4c49.1 20.8 93.2 50.5 131 88.4s67.6 82 88.4 131c21.5 50.8 32.4 104.8 32.4 160.4s-10.9 109.6-32.4 160.4c-20.8 49.1-50.5 93.2-88.4 131s-81.9 67.7-131 88.5zM475.4 432.2a36 36 0 1 0 72 0 36 36 0 1 0-72 0zm0 158.2a36 36 0 1 0 72 0 36 36 0 1 0-72 0zM367.5 332.9h-38.7c-3.8 0-7.6 1.2-10.7 3.4-13.7 9.8-52.5 36.2-80.2 51.9-2.9 1.6-4.6 4.7-4.6 8v38.5h77.2v269.7c0 5.1 4.1 9.2 9.2 9.2h47.8c5.1 0 9.2-4.1 9.2-9.2V342c0-5-4.1-9.1-9.2-9.1zm360.4 0h-38.6c-3.8 0-7.6 1.2-10.7 3.4-13.7 9.8-52.5 36.2-80.2 51.9-2.9 1.6-4.6 4.7-4.6 8v29.4c0 5.1 4.1 9.2 9.2 9.2h68v269.7c0 5.1 4.1 9.2 9.2 9.2H728c5.1 0 9.2-4.1 9.2-9.2V342.1c0-5.1-4.2-9.2-9.3-9.2z"/></svg>',_Icon[IconType.Download]='<svg class="icon" style="width:1em;height:1em;vertical-align:middle" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="currentColor" overflow="hidden"><path d="M895.778 862.287c0 18.531-15.023 33.554-33.554 33.554h-700.87c-18.53 0-33.554-15.023-33.554-33.554 0-18.531 15.023-33.554 33.554-33.554h700.87c18.532 0 33.554 15.023 33.554 33.554zm-384.063-94.621c-18.531 0-33.554-15.023-33.554-33.554V161.974c0-18.532 15.023-33.554 33.554-33.554 18.531 0 33.554 15.023 33.554 33.554v572.138c0 18.53-15.023 33.554-33.554 33.554zm23.726-10.046c-13.103 13.104-34.349 13.104-47.452 0l-251.83-251.83c-13.103-13.103-13.103-34.349 0-47.452 13.104-13.104 34.35-13.104 47.453 0l251.83 251.83c13.103 13.103 13.103 34.348 0 47.452zm-47.452 0c-13.104-13.104-13.104-34.35 0-47.454l251.83-251.83c13.103-13.103 34.348-13.103 47.452 0 13.103 13.104 13.103 34.35 0 47.454L535.44 757.62c-13.104 13.104-34.349 13.104-47.452 0z"/></svg>',_Icon),defaultTheme={primaryColor:"#0084ff",primaryTextColor:"#333",primaryBackgroundColor:"#fff",secondColor:"#cce6ff",secondTextColor:"#999",hintColor:"#ccc"};function getConfig(customConfig){var fullTheme=Object.assign({},defaultTheme,customConfig.theme),defaultConfig={mountNodeSelector:"#app",theme:fullTheme,initialExpandDepth:1,showToolbar:!0,initialScale:1,showBackgroundGrid:!1,width:800,height:600,backgroundColor:fullTheme.primaryBackgroundColor,rootNode:{width:300,height:60,backgroundColor:fullTheme.primaryColor,strokeWidth:1,strokeColor:fullTheme.primaryColor,textColor:fullTheme.primaryBackgroundColor},node:{margin:[50,80],width:120,height:60,strokeColor:fullTheme.hintColor,strokeWidth:1,backgroundColor:fullTheme.primaryBackgroundColor,borderRadius:4,customRender:null},link:{color:fullTheme.hintColor,markerColor:fullTheme.primaryColor,lineType:LinkLineType.Polyline}};return src_default.a.recursive(!0,defaultConfig,customConfig)}function init(config){var mountNodeSelector=config.mountNodeSelector,svgW=config.width,svgH=config.height,mountRoot=d3.c(mountNodeSelector).style("position","relative"),svg=mountRoot.append("svg").attr("id","fancy-tree").attr("width",svgW).attr("height",svgH).attr("style","position: relative;z-index: 2;").style("background-color",config.backgroundColor).classed("grid",config.showBackgroundGrid).classed("fancy-tree",!0),svgGroup=svg.append("g").attr("transform","translate("+svgW/2+","+svgH/2+")"),zoom=d3.e().scaleExtent([.2,3]).on("zoom",(function(){svgGroup.attr("transform",d3.a.transform.translate(svgW/2,svgH/2))}));svg.call(zoom),zoom.scaleTo(svg,config.initialScale);var toolButtons=[{label:"放大",type:IconType.ZoomIn},{label:"缩小",type:IconType.ZoomOut},{label:"恢复到1:1",type:IconType.ZoomReset}];return config.showToolbar&&d3.c(mountNodeSelector).append("div").classed("toolbar",!0).selectAll("div").data(toolButtons).enter().append("div").classed("toolbar-button",!0).html((function(d){return Icon[d.type]})).attr("title",(function(d){return d.label})).on("click",(function(d,i,g){switch(d.type){case IconType.ZoomIn:zoom.scaleBy(svg,1.2);break;case IconType.ZoomOut:zoom.scaleBy(svg,.8);break;case IconType.ZoomReset:zoom.scaleTo(svg,1);break;case IconType.Grid:svg.classed("grid",!svg.classed("grid"))}})),svg.append("defs").html('\n<marker id="arrow-end" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto">\n  <path d="M 0 0 L 10 5 L 0 10 z" fill='+config.link.markerColor+' stroke="none"/>\n</marker>\n<marker id="arrow-start" viewBox="0 0 10 10" refX="-10" refY="5" markerWidth="10" markerHeight="10" orient="auto">\n    <path d="M 0 0 L 10 5 L 0 10 z" fill="'+config.link.markerColor+'" stroke="none"/>\n</marker>\n<marker id="arrow-start-reverse" viewBox="0 0 10 10" refX="-10" refY="5" markerWidth="10" markerHeight="10" orient="auto">\n    <path d="M 10 0 L 0 5 L 10 10 z" fill="'+config.link.markerColor+'" stroke="none"/>\n</marker>\n<symbol id="circle-plus">\n    <circle cx="10" cy="10" r="9" stroke="'+config.link.markerColor+'" fill="'+config.link.markerColor+'"/>\n    <path d="M4 10 H16" fill="#fff" stroke="#fff" />\n    <path d="M10 4 V16" fill="#fff" stroke="#fff" />\n</symbol>\n<symbol id="circle-minus">\n    <circle cx="10" cy="10" r="9" stroke="'+config.link.markerColor+'" fill="#fff"/>\n    <path d="M4 10 H16" stroke="'+config.link.markerColor+'" />\n</symbol>\n<symbol id="circle-loading">\n  <circle cx="10" cy="10" r="8" stroke-width="2" stroke="'+config.link.markerColor+'" stroke-dasharray="12 12" fill="none" stroke-linecap="round">\n  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 10 10;360 10 10"></animateTransform>\n  </circle>\n</symbol>\n\n'),{mountRoot:mountRoot,svg:svg,svgGroup:svgGroup}}!function(LinkLineType){LinkLineType.Polyline="polyline",LinkLineType.PolylineApart="polyline-apart",LinkLineType.Curve="curve",LinkLineType.Line="line"}(LinkLineType||(LinkLineType={}));var injectStylesIntoStyleTag=__webpack_require__(447),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),FancyTree=__webpack_require__(288),options={insert:"head",singleton:!1};injectStylesIntoStyleTag_default()(FancyTree.a,options),FancyTree.a.locals;function createLevelFlowTree(customConfig){var config=getConfig(customConfig),_init=init(config),svgGroup=_init.svgGroup,marginX=(_init.mountRoot,config.node.margin[0]),marginY=config.node.margin[1],nodeW=config.node.width,nodeH=config.node.height,lineType=config.link.lineType,data=config.data,offsetDelta=marginY+nodeH,levelMiddleIndex=(data.length-1)/2,levelEnter=svgGroup.selectAll("g.level-group").data(data).enter().append("g").classed("level-group",!0).attr("level",(function(d){return d.level})).attr("transform",(function(d,levelIndex){var translateY=(levelIndex-levelMiddleIndex)*offsetDelta;return d.x=0,d.y=translateY,"translate(0,"+translateY+")"}));levelEnter.each((function(levelData,levelIndex){var nodes=levelData.nodes,offsetDelta=marginX+nodeW,nodeMiddleIndex=(nodes.length-1)/2,nodeEnter=svgGroup.selectAll('g.level-group[level="'+levelData.level+'"]').selectAll("g.node").data(nodes).enter().append("g").classed("node",!0).attr("id",(function(d){return d.id})).attr("transform",(function(d,nodeIndex){var translateX=(nodeIndex-nodeMiddleIndex)*offsetDelta;return d.x=translateX,d.y=levelData.y,"translate("+translateX+",0)"}));nodeEnter.append("rect").attr("width",nodeW).attr("height",nodeH).attr("x",-nodeW/2).attr("y",-nodeH/2).attr("rx",config.node.borderRadius).attr("ry",config.node.borderRadius).attr("fill",config.node.backgroundColor).attr("stroke",config.node.strokeColor).on("mouseenter",(function(d,i,g){var allDownNodeNames=[d.id];!function traverse(nodes,cb){nodes.forEach((function(node){cb(node),node.downstreamNodes&&traverse(node.downstreamNodes,cb)}))}(d.downstreamNodes,(function(node){return allDownNodeNames.push(node.id)})),svgGroup.selectAll("g.level-group > g.node").filter((function(d){return allDownNodeNames.indexOf(d.id)>-1})).selectAll("rect").attr("fill",config.theme.secondColor).attr("stroke",config.theme.primaryColor),svgGroup.selectAll("g.links-group > path").classed("highlight",(function(_,lineIndex,lines){if(!lines)return!1;var sourceNodeName=lines[lineIndex].getAttribute("source-node");return!!sourceNodeName&&allDownNodeNames.indexOf(sourceNodeName)>-1})).filter(".highlight").raise().attr("stroke-width",1.5).attr("stroke",config.theme.primaryColor)})).on("mouseleave",(function(d,i,g){svgGroup.selectAll("g.level-group > g.node > rect").attr("fill",config.node.backgroundColor).attr("stroke",config.node.strokeColor),svgGroup.selectAll("g.links-group > path").filter(".highlight").attr("stroke-width",1).attr("stroke",config.link.color).classed("highlight",!1)})),nodeEnter.append("text").attr("class","node-title").attr("x",0).attr("y",-10).attr("text-anchor","middle").attr("fill",config.theme.primaryTextColor).text((function(d){var title=(d.bizData||{}).title||"";return title=title.length>9?title.substr(0,9):title})),nodeEnter.append("text").attr("class","node-desc").attr("x",0).attr("y",20).attr("text-anchor","middle").attr("fill",config.theme.primaryTextColor).text((function(d){var desc=(d.bizData||{}).desc||"";return desc=desc.length>9?desc.substr(0,9):desc}))}));var linksGroup=svgGroup.append("g").classed("links-group",!0);levelEnter.each((function(levelData,levelIndex){svgGroup.selectAll('g.level-group[level="'+levelData.level+'"] > g').each((function(nodeData,nodeIndex){var links=nodeData.links,targetNodes=function getDownstreamNodes(levelIndex){var ids=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(levelIndex>=data.length)return[];for(var results=[],nodes=data[levelIndex].nodes,i=0;i<nodes.length;i++)ids.indexOf(nodes[i].id)>-1&&results.push(nodes[i]);return results}(levelIndex+1,links),upstreamNodes=function getUpstreamNodes(levelIndex,id){if(levelIndex>=data.length||levelIndex<0)return[];for(var results=[],nodes=data[levelIndex].nodes,i=0;i<nodes.length;i++)nodes[i].links.indexOf(id)>-1&&results.push(nodes[i]);return results}(levelIndex-1,nodeData.id);nodeData.downstreamNodes=targetNodes,nodeData.upstreamNodes=upstreamNodes,targetNodes.forEach((function(targetData,i){var pathData=function generatePathData(ss,dd,lineType){var shrinkY=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,s={x:ss.x,y:ss.y+nodeH/2},d={x:dd.x,y:dd.y-nodeH/2};switch(lineType){case LinkLineType.Curve:return"M "+s.x+" "+s.y+" C"+s.x+" "+d.y+","+d.x+" "+s.y+","+d.x+" "+d.y;case LinkLineType.Line:return"M "+s.x+" "+s.y+" L "+d.x+" "+d.y;case LinkLineType.Polyline:return"M"+s.x+" "+s.y+" V"+((d.y+s.y)/2+shrinkY)+" H"+(d.x+s.x)/2+" H"+d.x+" V"+d.y;case LinkLineType.PolylineApart:var m={x:(s.x+d.x)/2,y:(s.y+d.y)/2+shrinkY};return["M"+s.x+" "+s.y+" V"+m.y+" H"+m.x,"M"+m.x+" "+m.y+" H"+d.x+" V"+d.y];default:return[]}}(nodeData,targetData,lineType,0*i);if(2===pathData.length){var pathGroup=linksGroup.append("g");pathGroup.append("path").attr("d",pathData[0]).attr("fill","none").attr("stroke",config.link.color).attr("marker-end","url(#arrow-end)"),pathGroup.append("path").attr("d",pathData[1]).attr("fill","none").attr("stroke",config.link.color).attr("marker-end","url(#arrow-end)")}else"string"==typeof pathData&&linksGroup.append("path").attr("d",pathData).attr("fill","none").attr("stroke",config.link.color).attr("marker-end","url(#arrow-end)").attr("source-node",nodeData.id).attr("target-node",targetData.id)}))}))}))}__webpack_require__(25),__webpack_require__(12);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var TreeDirection;function createSandglassTree(customConfig){var upTreeRoot,downTreeRoot,config=getConfig(customConfig),_init=init(config),svgGroup=_init.svgGroup,data=(_init.svg,_init.mountRoot,config.data),marginX=config.node.margin[0],marginY=config.node.margin[1],nodeW=config.node.width,nodeH=config.node.height,rootNodeH=(config.rootNode.width||config.node.width,nodeH),hasChildNodeArr=[],idIndex=0,layoutTree=d3.d().nodeSize([marginX+nodeW,marginY+nodeH]).separation((function(){return 1})),upTree=Object.assign({},data,{parents:null,children:data.parents}),downTree=Object.assign({},data,{parents:null,children:data.children});function update(source,direction,sourceTree){var nodes,isUpward=direction===TreeDirection.Up,links=(nodes=direction===TreeDirection.Up?layoutTree(upTreeRoot).descendants():layoutTree(downTreeRoot).descendants()).slice(1);nodes.forEach((function(d){}));var node=svgGroup.selectAll("g.node"+direction).data(nodes,(function(d){return d.data.id||(d.data.id=direction+ ++idIndex)})),nodeEnter=node.enter().append("g").attr("class",(function(d){return isUpward&&!d.depth?"hide-node nodeup":"node"+direction})).attr("transform",(function(d){return"translate("+d.x+","+(isUpward?-d.y:d.y)+")"}));nodeEnter.append("rect").attr("type",(function(d){return d.data.id})).attr("width",(function(d){return d.depth?nodeW:config.rootNode.width||nodeW})).attr("height",(function(d){return d.depth?nodeH:config.rootNode.height||nodeH})).attr("x",(function(d){return-(d.depth?nodeW:config.rootNode.width||nodeW)/2})).attr("y",(function(d){return-(d.depth?nodeH:config.rootNode.height||nodeH)/2})).attr("stroke",(function(d){return d.depth?config.node.strokeColor:config.rootNode.strokeColor})).attr("stroke-width",config.rootNode.strokeWidth).attr("rx",4).attr("ry",4).style("fill",(function(d){return d.depth?config.node.backgroundColor:config.rootNode.backgroundColor})).on("mouseenter",(function(d,i,g){var event=d3.a;d.data.hoverCallback&&(d.data._destroyHoverInfo=d.data.hoverCallback(event,d)),d.depth})).on("mouseleave",(function(d){"function"==typeof d.data._destroyHoverInfo&&d.data._destroyHoverInfo()})),nodeEnter.append("use").attr("type",(function(d){return d.data.id})).attr("x",-10).attr("y",(function(d){return direction===TreeDirection.Up?-nodeH/2-20:nodeH/2})).attr("href",(function(d){return(d.data.children||d.data.getChildren)&&d.depth?d.data.isOpen?"#circle-minus":"#circle-plus":null})).on("click",function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(d){var children;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(d.data.isOpen=!d.data.isOpen,d.data.children||!d.data.getChildren){_context.next=9;break}return this.setAttribute("href","#circle-loading"),_context.next=5,d.data.getChildren(d);case 5:children=_context.sent,d.data.children=children,d.data._children=children.map((function(item){return{data:item,depth:d.depth+1,height:0,parent:d}})),this.setAttribute("href","#circle-minus");case 9:this.setAttribute("href",d.data.isOpen?"#circle-minus":"#circle-plus"),d.depth&&(d.children?(d.data._children=d.children,d.children=void 0):(d.children=d.data._children,d.data._children=void 0),update(d,direction,sourceTree));case 11:case"end":return _context.stop()}}),_callee,this)})));return function(_x){return _ref.apply(this,arguments)}}()),nodeEnter.append("g").attr("class","node-link-label").attr("transform",(function(){return"translate(0,0)"})).append("text").attr("x",(function(d){return d.x>0&&"up"===direction?-30:30})).attr("y",isUpward?nodeH/2+20:-nodeH/2-10).attr("text-anchor","middle").attr("fill",(function(d){return 0===d.data.type?"#FD7D00":"#7A9EFF"})).text((function(d){var _d$data$bizData;return d.depth&&(null===(_d$data$bizData=d.data.bizData)||void 0===_d$data$bizData?void 0:_d$data$bizData.linkLabelRight)||""})),nodeEnter.append("text").attr("class","node-title").attr("x",0).attr("y",0).attr("text-anchor","middle").attr("style",(function(d){return"fill:"+(d.depth?config.theme.primaryTextColor:config.rootNode.textColor)})).text((function(d){var _d$data$bizData2,title=(null===(_d$data$bizData2=d.data.bizData)||void 0===_d$data$bizData2?void 0:_d$data$bizData2.title)||"";return title=title.length>8?title.substr(0,8):title})),nodeEnter.append("text").attr("class","node-title").attr("x",0).attr("y",0).attr("dy","1.2em").attr("text-anchor","middle").attr("fill",(function(d){return d.depth?config.theme.primaryTextColor:config.rootNode.textColor})).text((function(d){var _d$data$bizData3;return((null===(_d$data$bizData3=d.data.bizData)||void 0===_d$data$bizData3?void 0:_d$data$bizData3.title)||"").slice(8)})),nodeEnter.append("text").attr("class","node-desc").attr("x",0).attr("y",0).attr("dy","1.8em").attr("text-anchor","middle").attr("fill",(function(d){return d.depth?"#465166":"#fff"})).text((function(d){var _d$data$bizData4;return(null===(_d$data$bizData4=d.data.bizData)||void 0===_d$data$bizData4?void 0:_d$data$bizData4.desc)||""}));node.transition().duration(200).attr("transform",(function(d){return"up"===direction?"translate("+d.x+","+-d.y+")":"translate("+d.x+","+d.y+")"}));var link=svgGroup.selectAll("path.link"+direction).data(links,(function(d){return d.data.id}));link.enter().insert("path","g").attr("class","link"+direction).attr("marker-start","url(#arrow-start"+(isUpward?"":"-reverse")+")").attr("stroke",config.link.color).attr("fill","none").style("fill-opacity",1).merge(link).transition().duration(200).attr("d",(function(d){return diagonal(d,d.parent,direction)})),node.exit().transition().duration(200).attr("opacity",0).attr("transform",(function(){return"translate("+source.x+","+(isUpward?-source.y:source.y)+")"})).remove(),link.exit().transition().attr("opacity",0).duration(100).attr("d",(function(){return diagonal(source,source,direction)})).remove()}function diagonal(ss,dd,direction){var lineType=arguments.length>3&&void 0!==arguments[3]?arguments[3]:LinkLineType.Polyline;if(!dd)return"";var s={x:ss.x,y:ss.y-(ss.depth?nodeH/2:rootNodeH/2)},d={x:dd.x,y:dd.y+(dd.depth?nodeH/2:rootNodeH/2)};return lineType===LinkLineType.Curve?direction===TreeDirection.Up?"M "+s.x+" "+-s.y+" C"+s.x+" -"+0*(s.y+d.y)+","+s.x+" -"+0*(s.y+d.y)+","+d.x+" -"+d.y:"M "+s.x+" "+s.y+"C"+s.x+" "+0*(s.y+d.y)+","+s.x+" "+0*(s.y+d.y)+","+d.x+" "+d.y:direction===TreeDirection.Up?"M"+s.x+" "+-s.y+" V"+-(d.y+s.y)/2+" H"+d.x+" V"+-d.y:"M"+s.x+" "+s.y+" V"+(d.y+s.y)/2+" H"+d.x+" V"+d.y}function collapse(source){source.children&&(source.data._children=source.children,source.data._children.forEach(collapse),source.children=void 0,source.data.isOpen=!1,hasChildNodeArr.push(source))}!function hierachy(){var isFirstRun=arguments.length>0&&void 0!==arguments[0]&&arguments[0];upTreeRoot=d3.b(upTree,(function(d){return d.children})),downTreeRoot=d3.b(downTree,(function(d){return d.children}));var treeArr=[{data:upTreeRoot,type:TreeDirection.Up},{data:downTreeRoot,type:TreeDirection.Down}];function traverse(node,condition,cb){cb(node),node.children&&condition(node)&&node.children.forEach((function(item){return traverse(item,cb,condition)}))}treeArr.map((function(item){item.data.children&&(isFirstRun?traverse(item.data,(function(node){return node.depth<=config.initialExpandDepth}),(function(node){node.depth===config.initialExpandDepth?collapse(node):node.data.isOpen=!0})):traverse(item.data,(function(node){return!0}),(function(node){node.depth&&!1===node.data.isOpen&&collapse(node)})),update(item.data,item.type,item.data))}))}(!0)}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}!function(TreeDirection){TreeDirection.Up="up",TreeDirection.Down="down"}(TreeDirection||(TreeDirection={}));var TreeType,defaultArgs={showToolbar:!1,showBackgroundGrid:!1,backgroundColor:"#fff",initialScale:1};__webpack_exports__.default={title:"FancyTree",argTypes:{showToolbar:{control:"boolean"},backgroundColor:{control:"color"},showBackgroundGrid:{control:"boolean"},initialScale:{control:{type:"range",max:3,min:.2,step:.2}}}};!function(TreeType){TreeType.LevelFlow="LevelFlow",TreeType.Sandglass="Sandglass"}(TreeType||(TreeType={}));var FancyTree_stories_Template=function Template(type,_ref){var args=_extends({},_ref),div=document.createElement("div");return div.setAttribute("id","FancyTreeDemo"),setTimeout((function(){"LevelFlow"===type?createLevelFlowTree(Object.assign({mountNodeSelector:"#FancyTreeDemo"},args)):"Sandglass"===type&&createSandglassTree(Object.assign({mountNodeSelector:"#FancyTreeDemo"},args))}),0),div},LevelFlowTree=FancyTree_stories_Template.bind(null,TreeType.LevelFlow);LevelFlowTree.args=Object.assign({},defaultArgs,{data:level_flow});var SandglassTree=FancyTree_stories_Template.bind(null,TreeType.Sandglass);SandglassTree.args=Object.assign({},defaultArgs,{data:sandglass});var SandglassTreeHoverInfo=FancyTree_stories_Template.bind(null,TreeType.Sandglass);SandglassTreeHoverInfo.args=Object.assign({},defaultArgs,{data:sandglass_hover});var SandglassTreeLazyLoad=FancyTree_stories_Template.bind(null,TreeType.Sandglass);SandglassTreeLazyLoad.args=Object.assign({},defaultArgs,{data:sandglass_lazy_load}),LevelFlowTree.parameters=Object.assign({storySource:{source:"Template.bind(null, TreeType.LevelFlow)"}},LevelFlowTree.parameters),SandglassTree.parameters=Object.assign({storySource:{source:"Template.bind(null, TreeType.Sandglass)"}},SandglassTree.parameters),SandglassTreeHoverInfo.parameters=Object.assign({storySource:{source:"Template.bind(null, TreeType.Sandglass)"}},SandglassTreeHoverInfo.parameters),SandglassTreeLazyLoad.parameters=Object.assign({storySource:{source:"Template.bind(null, TreeType.Sandglass)"}},SandglassTreeLazyLoad.parameters)},841:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(23),__webpack_require__(5),__webpack_require__(48),__webpack_require__(822),__webpack_require__(281),__webpack_require__(41),__webpack_require__(823),__webpack_require__(824),__webpack_require__(825);var client_api=__webpack_require__(852),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[480,2,3]]]);
//# sourceMappingURL=main.69524d97.iframe.bundle.js.map