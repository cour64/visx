_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[109],{"+1NP":function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t,e,a){return new Array(n).fill(1).reduce((function(n,i,c){return n.concat([{bin:c,bins:(0,r.default)(t,e,a)}])}),[])};var a,r=(a=e("mNV6"))&&a.__esModule?a:{default:a}},"201w":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e("J4UP");function r(n){return Object(a.a)(n)}},"67po":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var a=e("uKU/"),r=e("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(n){return i(Object(a.a)(),n)}},GKGl:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/heatmaps",function(){return e("yRVi")}])},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e("lEbO");function r(n,t){if(n){if("string"===typeof n)return Object(a.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(a.a)(n,t):void 0}}},IkWl:function(n){n.exports=JSON.parse('{"name":"@visx/demo-heatmap","description":"Standalone visx heatmap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/group":"latest","@visx/heatmap":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","heatmap"]}')},J4UP:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));const a=1/4294967296;function r(n=Math.random()){let t=0|(0<=n&&n<1?n/a:Math.abs(n));return()=>(t=1664525*t+1013904223|0,a*(t>>>0))}},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return m}));var a=e("aWzz"),r=e.n(a),i=e("ERkP"),c=e.n(i),o=e("O94r"),u=e.n(o),l=["top","left","transform","className","children","innerRef"];function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function m(n){var t=n.top,e=void 0===t?0:t,a=n.left,r=void 0===a?0:a,i=n.transform,o=n.className,m=n.children,d=n.innerRef,p=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,l);return c.a.createElement("g",s({ref:d,className:u()("visx-group",o),transform:i||"translate("+r+", "+e+")"},p),m)}m.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},Zbhd:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var a=e("PB0s"),r=e("XAd9"),i=e("Cyas"),c=e("VBI3");function o(n,t,e,o){var u,l=Object(a.c)(n,t,e);switch((o=Object(r.a)(null==o?",f":o)).type){case"s":var s=Math.max(Math.abs(n),Math.abs(t));return null!=o.precision||isNaN(u=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(n)))}(l,s))||(o.precision=u),Object(c.b)(o,s);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(u=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(i.a)(t)-Object(i.a)(n))+1}(l,Math.max(Math.abs(n),Math.abs(t))))||(o.precision=u-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(u=function(n){return Math.max(0,-Object(i.a)(Math.abs(n)))}(l))||(o.precision=u-2*("%"===o.type))}return Object(c.a)(o)}},Zydf:function(n,t,e){"use strict";e.d(t,"a",(function(){return S}));var a=e("fGyu"),r=e("jg1C"),i=e("ERkP"),c=e.n(i),o=e("JmwF"),u=e("+1NP"),l=e.n(u),s=e("67po"),m=e("aWzz"),d=e.n(m),p=e("O94r"),f=e.n(p),b=["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"];function h(){return(h=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function g(n){var t=n.className,e=n.top,a=n.left,r=n.data,i=void 0===r?[]:r,u=n.gap,l=void 0===u?1:u,s=n.radius,m=void 0===s?6:s,d=n.xScale,p=n.yScale,g=n.colorScale,v=void 0===g?function(){}:g,y=n.opacityScale,x=void 0===y?function(){return 1}:y,O=n.bins,S=void 0===O?function(n){return null==n?void 0:n.bins}:O,j=n.count,w=void 0===j?function(n){return null==n?void 0:n.count}:j,M=n.children,N=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,b),k=m-l,E=i.map((function(n,t){var e=d(t);return S(n).map((function(a,r){var i=w(a);return{bin:a,row:r,column:t,datum:n,radius:m,gap:l,count:i,cx:m+e,cy:p(r)+l+m,r:k,opacity:x(i),color:v(i)}}))}));return M?c.a.createElement(c.a.Fragment,null,M(E)):c.a.createElement(o.a,{className:"visx-heatmap-circles",top:e,left:a},E.map((function(n){return n.map((function(n){return c.a.createElement("circle",h({key:"heatmap-tile-circle-"+n.row+"-"+n.column,className:f()("visx-heatmap-circle",t),r:n.r,cx:n.cx,cy:n.cy,fill:n.color,fillOpacity:n.opacity},N))}))})))}g.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,gap:d.a.number,radius:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func};var v=["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"];function y(){return(y=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function x(n){var t=n.className,e=n.top,a=n.left,r=n.data,i=void 0===r?[]:r,u=n.binWidth,l=void 0===u?6:u,s=n.binHeight,m=void 0===s?6:s,d=n.x0,p=void 0===d?0:d,b=n.gap,h=void 0===b?1:b,g=n.xScale,x=n.yScale,O=n.colorScale,S=void 0===O?function(){}:O,j=n.opacityScale,w=void 0===j?function(){return 1}:j,M=n.bins,N=void 0===M?function(n){return null==n?void 0:n.bins}:M,k=n.count,E=void 0===k?function(n){return null==n?void 0:n.count}:k,_=n.children,R=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,v),C=l-h,H=m-h,A=i.map((function(n,t){var e=g(t);return N(n).map((function(a,r){var i=E(a);return{bin:a,row:r,column:t,datum:n,width:C,height:H,gap:h,count:i,x:e+p,y:x(r)+h,color:S(i),opacity:w(i)}}))}));return _?c.a.createElement(c.a.Fragment,null,_(A)):c.a.createElement(o.a,{className:"visx-heatmap-rects",top:e,left:a},A.map((function(n){return n.map((function(n){return c.a.createElement("rect",y({key:"heatmap-tile-rect-"+n.row+"-"+n.column,className:f()("visx-heatmap-rect",t),width:n.width,height:n.height,x:n.x,y:n.y,fill:n.color,fillOpacity:n.opacity},R))}))})))}x.propTypes={data:d.a.array,left:d.a.number,top:d.a.number,binWidth:d.a.number,binHeight:d.a.number,x0:d.a.number,gap:d.a.number,xScale:d.a.func.isRequired,yScale:d.a.func.isRequired,bins:d.a.func,count:d.a.func,className:d.a.string,children:d.a.func};var O=e("201w"),S="#28272c",j=Object(O.a)(.41),w=l()(16,16,(function(n){return 150*n}),(function(n,t){return 25*(t-n)*j()}));function M(n,t){return Math.max.apply(Math,Object(a.a)(n.map(t)))}var N=function(n){return n.bins},k=function(n){return n.count},E=M(w,(function(n){return M(N(n),k)})),_=M(w,(function(n){return N(n).length})),R=Object(s.a)({domain:[0,w.length]}),C=Object(s.a)({domain:[0,_]}),H=Object(s.a)({range:["#77312f","#f33d15"],domain:[0,E]}),A=Object(s.a)({range:["#122549","#b4fbde"],domain:[0,E]}),B=Object(s.a)({range:[.1,1],domain:[0,E]}),P={top:10,left:20,right:20,bottom:110},D=function(n){var t,e,i=n.width,c=n.height,u=n.events,l=void 0!==u&&u,s=n.margin,m=void 0===s?P:s,d=n.separation,p=void 0===d?20:d,f=(i>m.left+m.right?i-m.left-m.right-p:i)/2,b=c-m.bottom-m.top,h=f/w.length,v=(t=[h,b/_],e=function(n){return n},Math.min.apply(Math,Object(a.a)(t.map(e)))/2);return R.range([0,f]),C.range([b,0]),i<10?null:Object(r.jsxs)("svg",{width:i,height:c,children:[Object(r.jsx)("rect",{x:0,y:0,width:i,height:c,rx:14,fill:S}),Object(r.jsx)(o.a,{top:m.top,left:m.left,children:Object(r.jsx)(g,{data:w,xScale:function(n){var t;return null!==(t=R(n))&&void 0!==t?t:0},yScale:function(n){var t;return null!==(t=C(n))&&void 0!==t?t:0},colorScale:H,opacityScale:B,radius:v,gap:2,children:function(n){return n.map((function(n){return n.map((function(n){return Object(r.jsx)("circle",{className:"visx-heatmap-circle",cx:n.cx,cy:n.cy,r:n.r,fill:n.color,fillOpacity:n.opacity,onClick:function(){if(l){var t=n.row,e=n.column;alert(JSON.stringify({row:t,column:e,bin:n.bin}))}}},"heatmap-circle-".concat(n.row,"-").concat(n.column))}))}))}})}),Object(r.jsx)(o.a,{top:m.top,left:f+m.left+p,children:Object(r.jsx)(x,{data:w,xScale:function(n){var t;return null!==(t=R(n))&&void 0!==t?t:0},yScale:function(n){var t;return null!==(t=C(n))&&void 0!==t?t:0},colorScale:A,opacityScale:B,binWidth:h,binHeight:h,gap:2,children:function(n){return n.map((function(n){return n.map((function(n){return Object(r.jsx)("rect",{className:"visx-heatmap-rect",width:n.width,height:n.height,x:n.x,y:n.y,fill:n.color,fillOpacity:n.opacity,onClick:function(){if(l){var t=n.row,e=n.column;alert(JSON.stringify({row:t,column:e,bin:n.bin}))}}},"heatmap-rect-".concat(n.row,"-").concat(n.column))}))}))}})})]})};t.b=D;try{D.displayName="Example",D.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},separation:{defaultValue:{value:20},description:"",name:"separation",required:!1,type:{name:"number | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-heatmap/Example.tsx#Example"]={docgenInfo:D.__docgenInfo,name:"Example",path:"src/sandboxes/visx-heatmap/Example.tsx#Example"})}catch(W){}},fGyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e("lEbO");var r=e("HO86");function i(n){return function(n){if(Array.isArray(n))return Object(a.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(r.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(n,t,e){"use strict";function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}e.d(t,"a",(function(){return a}))},mNV6:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t,e){void 0===t&&(t=r);void 0===e&&(e=a);return new Array(n).fill(1).reduce((function(a,r,i){return a.concat([{bin:t(i,n),count:e(i,n)}])}),[])};var a=function(n,t){return Math.random()*(25*(t-n))},r=function(n,t){return 150*n}},"uKU/":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return u}));var a=e("PB0s"),r=e("2+fR"),i=e("W1cA"),c=e("Zbhd");function o(n){var t=n.domain;return n.ticks=function(n){var e=t();return Object(a.a)(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var a=t();return Object(c.a)(a[0],a[a.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var r,i,c=t(),o=0,u=c.length-1,l=c[o],s=c[u],m=10;for(s<l&&(i=l,l=s,s=i,i=o,o=u,u=i);m-- >0;){if((i=Object(a.b)(l,s,e))===r)return c[o]=l,c[u]=s,t(c);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}r=i}return n},n}function u(){var n=Object(r.b)();return n.copy=function(){return Object(r.a)(n,u())},i.b.apply(n,arguments),o(n)}},yRVi:function(n,t,e){"use strict";e.r(t);var a=e("jg1C"),r=(e("ERkP"),e("6wy5")),i=e("Zydf"),c=e("IkWl");t.default=function(){return Object(a.jsx)(r.a,{events:!0,margin:{top:10,left:40,right:30,bottom:80},component:i.b,title:"Heatmaps",codeSandboxDirectoryName:"visx-heatmap",packageJson:c,children:"import React from 'react';\nimport { Group } from '@visx/group';\nimport genBins, { Bin, Bins } from '@visx/mock-data/lib/generators/genBins';\nimport { scaleLinear } from '@visx/scale';\nimport { HeatmapCircle, HeatmapRect } from '@visx/heatmap';\nimport { getSeededRandom } from '@visx/mock-data';\n\nconst hot1 = '#77312f';\nconst hot2 = '#f33d15';\nconst cool1 = '#122549';\nconst cool2 = '#b4fbde';\nexport const background = '#28272c';\n\nconst seededRandom = getSeededRandom(0.41);\n\nconst binData = genBins(\n  /* length = */ 16,\n  /* height = */ 16,\n  /** binFunc */ (idx) => 150 * idx,\n  /** countFunc */ (i, number) => 25 * (number - i) * seededRandom(),\n);\n\nfunction max<Datum>(data: Datum[], value: (d: Datum) => number): number {\n  return Math.max(...data.map(value));\n}\n\nfunction min<Datum>(data: Datum[], value: (d: Datum) => number): number {\n  return Math.min(...data.map(value));\n}\n\n// accessors\nconst bins = (d: Bins) => d.bins;\nconst count = (d: Bin) => d.count;\n\nconst colorMax = max(binData, (d) => max(bins(d), count));\nconst bucketSizeMax = max(binData, (d) => bins(d).length);\n\n// scales\nconst xScale = scaleLinear<number>({\n  domain: [0, binData.length],\n});\nconst yScale = scaleLinear<number>({\n  domain: [0, bucketSizeMax],\n});\nconst circleColorScale = scaleLinear<string>({\n  range: [hot1, hot2],\n  domain: [0, colorMax],\n});\nconst rectColorScale = scaleLinear<string>({\n  range: [cool1, cool2],\n  domain: [0, colorMax],\n});\nconst opacityScale = scaleLinear<number>({\n  range: [0.1, 1],\n  domain: [0, colorMax],\n});\n\nexport type HeatmapProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n  separation?: number;\n  events?: boolean;\n};\n\nconst defaultMargin = { top: 10, left: 20, right: 20, bottom: 110 };\n\nconst Example = ({\n  width,\n  height,\n  events = false,\n  margin = defaultMargin,\n  separation = 20,\n}: HeatmapProps) => {\n  // bounds\n  const size =\n    width > margin.left + margin.right ? width - margin.left - margin.right - separation : width;\n  const xMax = size / 2;\n  const yMax = height - margin.bottom - margin.top;\n\n  const binWidth = xMax / binData.length;\n  const binHeight = yMax / bucketSizeMax;\n  const radius = min([binWidth, binHeight], (d) => d) / 2;\n\n  xScale.range([0, xMax]);\n  yScale.range([yMax, 0]);\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <rect x={0} y={0} width={width} height={height} rx={14} fill={background} />\n      <Group top={margin.top} left={margin.left}>\n        <HeatmapCircle\n          data={binData}\n          xScale={(d) => xScale(d) ?? 0}\n          yScale={(d) => yScale(d) ?? 0}\n          colorScale={circleColorScale}\n          opacityScale={opacityScale}\n          radius={radius}\n          gap={2}\n        >\n          {(heatmap) =>\n            heatmap.map((heatmapBins) =>\n              heatmapBins.map((bin) => (\n                <circle\n                  key={`heatmap-circle-${bin.row}-${bin.column}`}\n                  className=\"visx-heatmap-circle\"\n                  cx={bin.cx}\n                  cy={bin.cy}\n                  r={bin.r}\n                  fill={bin.color}\n                  fillOpacity={bin.opacity}\n                  onClick={() => {\n                    if (!events) return;\n                    const { row, column } = bin;\n                    alert(JSON.stringify({ row, column, bin: bin.bin }));\n                  }}\n                />\n              )),\n            )\n          }\n        </HeatmapCircle>\n      </Group>\n      <Group top={margin.top} left={xMax + margin.left + separation}>\n        <HeatmapRect\n          data={binData}\n          xScale={(d) => xScale(d) ?? 0}\n          yScale={(d) => yScale(d) ?? 0}\n          colorScale={rectColorScale}\n          opacityScale={opacityScale}\n          binWidth={binWidth}\n          binHeight={binWidth}\n          gap={2}\n        >\n          {(heatmap) =>\n            heatmap.map((heatmapBins) =>\n              heatmapBins.map((bin) => (\n                <rect\n                  key={`heatmap-rect-${bin.row}-${bin.column}`}\n                  className=\"visx-heatmap-rect\"\n                  width={bin.width}\n                  height={bin.height}\n                  x={bin.x}\n                  y={bin.y}\n                  fill={bin.color}\n                  fillOpacity={bin.opacity}\n                  onClick={() => {\n                    if (!events) return;\n                    const { row, column } = bin;\n                    alert(JSON.stringify({ row, column, bin: bin.bin }));\n                  }}\n                />\n              )),\n            )\n          }\n        </HeatmapRect>\n      </Group>\n    </svg>\n  );\n};\n\nexport default Example;\n"})}}},[["GKGl",0,2,1,3,4,5,6]]]);