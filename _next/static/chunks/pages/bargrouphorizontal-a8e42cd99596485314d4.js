_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{"/B0Q":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return i}));var r=e("W1cA");const a=Symbol("implicit");function i(){var n=new Map,t=[],e=[],o=a;function c(r){var i=r+"",c=n.get(i);if(!c){if(o!==a)return o;n.set(i,c=t.push(r))}return e[(c-1)%e.length]}return c.domain=function(e){if(!arguments.length)return t.slice();t=[],n=new Map;for(const r of e){const e=r+"";n.has(e)||n.set(e,t.push(r))}return c},c.range=function(n){return arguments.length?(e=Array.from(n),c):e.slice()},c.unknown=function(n){return arguments.length?(o=n,c):o},c.copy=function(){return i(t,e).unknown(o)},r.b.apply(c,arguments),c}},"9Op2":function(n,t,e){"use strict";e.r(t);var r=e("jg1C"),a=(e("ERkP"),e("6wy5")),i=e("NGMx"),o=e("pwZv");t.default=function(){return Object(r.jsx)(a.a,{events:!0,margin:{top:45,left:60,right:20,bottom:45},component:i.b,title:"Bar Group Horizontal",codeSandboxDirectoryName:"visx-bargroup-horizontal",packageJson:o,children:"import React from 'react';\nimport { BarGroupHorizontal, Bar } from '@visx/shape';\nimport { Group } from '@visx/group';\nimport { AxisLeft } from '@visx/axis';\nimport cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';\nimport { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';\nimport { timeParse, timeFormat } from 'd3-time-format';\n\nexport type BarGroupHorizontalProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n  events?: boolean;\n};\n\ntype CityName = 'New York' | 'San Francisco' | 'Austin';\n\nconst blue = '#aeeef8';\nexport const green = '#e5fd3d';\nconst purple = '#9caff6';\nexport const background = '#612efb';\nconst defaultMargin = { top: 20, right: 20, bottom: 20, left: 50 };\n\nconst parseDate = timeParse('%Y-%m-%d');\nconst format = timeFormat('%b %d');\nconst formatDate = (date: string) => format(parseDate(date) as Date);\nfunction max<D>(arr: D[], fn: (d: D) => number) {\n  return Math.max(...arr.map(fn));\n}\n\nconst data = cityTemperature.slice(0, 4);\nconst keys = Object.keys(data[0]).filter((d) => d !== 'date') as CityName[];\n\n// accessors\nconst getDate = (d: CityTemperature) => d.date;\n\n// scales\nconst dateScale = scaleBand({\n  domain: data.map(getDate),\n  padding: 0.2,\n});\nconst cityScale = scaleBand({\n  domain: keys,\n  padding: 0.1,\n});\nconst tempScale = scaleLinear<number>({\n  domain: [0, max(data, (d) => max(keys, (key) => Number(d[key])))],\n});\nconst colorScale = scaleOrdinal<string, string>({\n  domain: keys,\n  range: [blue, green, purple],\n});\n\nexport default function Example({\n  width,\n  height,\n  margin = defaultMargin,\n  events = false,\n}: BarGroupHorizontalProps) {\n  // bounds\n  const xMax = width - margin.left - margin.right;\n  const yMax = height - margin.top - margin.bottom;\n\n  // update scale output dimensions\n  dateScale.rangeRound([0, yMax]);\n  cityScale.rangeRound([0, dateScale.bandwidth()]);\n  tempScale.rangeRound([0, xMax]);\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />\n      <Group top={margin.top} left={margin.left}>\n        <BarGroupHorizontal\n          data={data}\n          keys={keys}\n          width={xMax}\n          y0={getDate}\n          y0Scale={dateScale}\n          y1Scale={cityScale}\n          xScale={tempScale}\n          color={colorScale}\n        >\n          {(barGroups) =>\n            barGroups.map((barGroup) => (\n              <Group\n                key={`bar-group-horizontal-${barGroup.index}-${barGroup.y0}`}\n                top={barGroup.y0}\n              >\n                {barGroup.bars.map((bar) => (\n                  <Bar\n                    key={`${barGroup.index}-${bar.index}-${bar.key}`}\n                    x={bar.x}\n                    y={bar.y}\n                    width={bar.width}\n                    height={bar.height}\n                    fill={bar.color}\n                    rx={4}\n                    onClick={() => {\n                      if (events) alert(`${bar.key} (${bar.value}) - ${JSON.stringify(bar)}`);\n                    }}\n                  />\n                ))}\n              </Group>\n            ))\n          }\n        </BarGroupHorizontal>\n        <AxisLeft\n          scale={dateScale}\n          stroke={green}\n          tickStroke={green}\n          tickFormat={formatDate}\n          hideAxisLine\n          tickLabelProps={() => ({\n            fill: green,\n            fontSize: 11,\n            textAnchor: 'end',\n            dy: '0.33em',\n          })}\n        />\n      </Group>\n    </svg>\n  );\n}\n"})}},"D+es":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("/B0Q"),a=e("xx0A"),i=Object(a.b)("domain","range","reverse","unknown");function o(n){return i(Object(r.a)(),n)}},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("lEbO");function a(n,t){if(n){if("string"===typeof n)return Object(r.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(n,t):void 0}}},JIJo:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bargrouphorizontal",function(){return e("9Op2")}])},KRsa:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("ERkP"),a=e.n(r),i=e("O94r"),o=e.n(i),c=e("5Nbk"),u=e("pn27"),l=["axisClassName","labelOffset","tickLabelProps","tickLength"];function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var d=function(){return{dx:"-0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"end"}};function f(n){var t=n.axisClassName,e=n.labelOffset,r=void 0===e?36:e,i=n.tickLabelProps,f=void 0===i?d:i,p=n.tickLength,m=void 0===p?8:p,h=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,l);return a.a.createElement(c.a,s({axisClassName:o()("visx-axis-left",t),labelOffset:r,orientation:u.a.left,tickLabelProps:f,tickLength:m},h))}},MhhK:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("ERkP"),a=e.n(r),i=e("O94r"),o=e.n(i),c=e("JmwF"),u=e("g2fB"),l=e("bmYZ"),s=["data","className","top","left","x","y0","y0Scale","y1Scale","xScale","color","keys","width","children"];function d(){return(d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.data,e=n.className,r=n.top,i=n.left,f=n.x,p=void 0===f?function(){return 0}:f,m=n.y0,h=n.y0Scale,b=n.y1Scale,g=n.xScale,y=n.color,x=n.keys,v=(n.width,n.children),O=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,s),k=Object(l.a)(b),w=t.map((function(n,t){return{index:t,y0:h(m(n))||0,bars:x.map((function(t,e){var r=n[t];return{index:e,key:t,value:r,height:k,x:p(r)||0,y:b(t)||0,color:y(t,e),width:g(r)||0}}))}}));return v?a.a.createElement(a.a.Fragment,null,v(w)):a.a.createElement(c.a,{className:o()("visx-bar-group-horizontal",e),top:r,left:i},w.map((function(n){return a.a.createElement(c.a,{key:"bar-group-"+n.index+"-"+n.y0,top:n.y0},n.bars.map((function(t){return a.a.createElement(u.a,d({key:"bar-group-bar-"+n.index+"-"+t.index+"-"+t.value+"-"+t.key,x:t.x,y:t.y,width:t.width,height:t.height,fill:t.color},O))})))})))}},NGMx:function(n,t,e){"use strict";e.d(t,"c",(function(){return h})),e.d(t,"a",(function(){return b})),e.d(t,"b",(function(){return A}));var r=e("fGyu"),a=e("jg1C"),i=(e("ERkP"),e("MhhK")),o=e("g2fB"),c=e("JmwF"),u=e("KRsa"),l=e("s2H9"),s=e.n(l),d=e("cc+0"),f=e("67po"),p=e("D+es"),m=e("mHfT"),h="#e5fd3d",b="#612efb",g={top:20,right:20,bottom:20,left:50},y=Object(m.b)("%Y-%m-%d"),x=Object(m.a)("%b %d"),v=function(n){return x(y(n))};function O(n,t){return Math.max.apply(Math,Object(r.a)(n.map(t)))}var k=s.a.slice(0,4),w=Object.keys(k[0]).filter((function(n){return"date"!==n})),j=function(n){return n.date},S=Object(d.a)({domain:k.map(j),padding:.2}),E=Object(d.a)({domain:w,padding:.1}),M=Object(f.a)({domain:[0,O(k,(function(n){return O(w,(function(t){return Number(n[t])}))}))]}),N=Object(p.a)({domain:w,range:["#aeeef8",h,"#9caff6"]});function A(n){var t=n.width,e=n.height,r=n.margin,l=void 0===r?g:r,s=n.events,d=void 0!==s&&s,f=t-l.left-l.right,p=e-l.top-l.bottom;return S.rangeRound([0,p]),E.rangeRound([0,S.bandwidth()]),M.rangeRound([0,f]),t<10?null:Object(a.jsxs)("svg",{width:t,height:e,children:[Object(a.jsx)("rect",{x:0,y:0,width:t,height:e,fill:b,rx:14}),Object(a.jsxs)(c.a,{top:l.top,left:l.left,children:[Object(a.jsx)(i.a,{data:k,keys:w,width:f,y0:j,y0Scale:S,y1Scale:E,xScale:M,color:N,children:function(n){return n.map((function(n){return Object(a.jsx)(c.a,{top:n.y0,children:n.bars.map((function(t){return Object(a.jsx)(o.a,{x:t.x,y:t.y,width:t.width,height:t.height,fill:t.color,rx:4,onClick:function(){d&&alert("".concat(t.key," (").concat(t.value,") - ").concat(JSON.stringify(t)))}},"".concat(n.index,"-").concat(t.index,"-").concat(t.key))}))},"bar-group-horizontal-".concat(n.index,"-").concat(n.y0))}))}}),Object(a.jsx)(u.a,{scale:S,stroke:h,tickStroke:h,tickFormat:v,hideAxisLine:!0,tickLabelProps:function(){return{fill:h,fontSize:11,textAnchor:"end",dy:"0.33em"}}})]})]})}try{A.displayName="Example",A.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-bargroup-horizontal/Example.tsx#Example"]={docgenInfo:A.__docgenInfo,name:"Example",path:"src/sandboxes/visx-bargroup-horizontal/Example.tsx#Example"})}catch(G){}},YaE3:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return u}));var r=function(n,t,e){n=+n,t=+t,e=(a=arguments.length)<2?(t=n,n=0,1):a<3?1:+e;for(var r=-1,a=0|Math.max(0,Math.ceil((t-n)/e)),i=new Array(a);++r<a;)i[r]=n+r*e;return i},a=e("W1cA"),i=e("/B0Q");function o(){var n,t,e=Object(i.a)().unknown(void 0),c=e.domain,u=e.range,l=0,s=1,d=!1,f=0,p=0,m=.5;function h(){var e=c().length,a=s<l,i=a?s:l,o=a?l:s;n=(o-i)/Math.max(1,e-f+2*p),d&&(n=Math.floor(n)),i+=(o-i-n*(e-f))*m,t=n*(1-f),d&&(i=Math.round(i),t=Math.round(t));var h=r(e).map((function(t){return i+n*t}));return u(a?h.reverse():h)}return delete e.unknown,e.domain=function(n){return arguments.length?(c(n),h()):c()},e.range=function(n){return arguments.length?([l,s]=n,l=+l,s=+s,h()):[l,s]},e.rangeRound=function(n){return[l,s]=n,l=+l,s=+s,d=!0,h()},e.bandwidth=function(){return t},e.step=function(){return n},e.round=function(n){return arguments.length?(d=!!n,h()):d},e.padding=function(n){return arguments.length?(f=Math.min(1,p=+n),h()):f},e.paddingInner=function(n){return arguments.length?(f=Math.min(1,n),h()):f},e.paddingOuter=function(n){return arguments.length?(p=+n,h()):p},e.align=function(n){return arguments.length?(m=Math.max(0,Math.min(1,n)),h()):m},e.copy=function(){return o(c(),[l,s]).round(d).paddingInner(f).paddingOuter(p).align(m)},a.b.apply(h(),arguments)}function c(n){var t=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return c(t())},n}function u(){return c(o.apply(null,arguments).paddingInner(1))}},bmYZ:function(n,t,e){"use strict";function r(n){if("bandwidth"in n)return n.bandwidth();var t=n.range(),e=n.domain();return Math.abs(t[t.length-1]-t[0])/e.length}e.d(t,"a",(function(){return r}))},"cc+0":function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("YaE3"),a=e("xx0A"),i=Object(a.b)("domain","range","reverse","align","padding","round");function o(n){return i(Object(r.a)(),n)}},fGyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("lEbO");var a=e("HO86");function i(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(a.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},g2fB:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("ERkP"),a=e.n(r),i=e("O94r"),o=e.n(i),c=["className","innerRef"];function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function l(n){var t=n.className,e=n.innerRef,r=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,c);return a.a.createElement("rect",u({ref:e,className:o()("visx-bar",t)},r))}},lEbO:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,"a",(function(){return r}))},pwZv:function(n){n.exports=JSON.parse('{"name":"@visx/demo-bargroup-horizontal","description":"Standalone visx horizontal grouped bar demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/axis":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-time-format":"^2.2.3","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","bargroup"]}')}},[["JIJo",0,2,1,3,4,5,6,12,13,17,18]]]);