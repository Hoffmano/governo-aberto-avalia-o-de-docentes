(window.webpackJsonp=window.webpackJsonp||[]).push([["infogram-charts/dep-14"],{"2LMz":function(t,e,n){"use strict";n.r(e),n.d(e,"inanimated",function(){return o}),n.d(e,"removeAnimation",function(){return l}),n.d(e,"removeDelay",function(){return a});var r=n("eYsL"),i=n.n(r);function o(t){return 0===i.a.get(t,"animation.duration")}function l(t){t.forEach(function(t){i.a.has(t,"animationDuration")?t.animationDuration(0):i.a.has(t,"animate")&&t.animate(!1)})}function a(t,e){return i.a.get(t,"runtime.inanimate")?function(){return 0}:e}},pKNx:function(t,e,n){"use strict";n.r(e),n.d(e,"createLabel",function(){return x}),n.d(e,"labelInfo",function(){return g}),n.d(e,"addOutline",function(){return p}),n.d(e,"ColumnHorizontalMiddle",function(){return y}),n.d(e,"ColumnVertical",function(){return m}),n.d(e,"ColumnHorizontal",function(){return v}),n.d(e,"createAddMouseEvents",function(){return L}),n.d(e,"createColumnLabelRenderer",function(){return E}),n.d(e,"LineHorizontal",function(){return z}),n.d(e,"createLineLabelRenderer",function(){return M});var r=n("xuOt"),i=n("Xmbb"),o=n("SC+/"),l=n("zVrf"),a=n("vBe5"),h=n("/TIM"),s=n("tU/c"),u=n("eYsL"),c=n.n(u);function f(t,e,n,r,i,o,l){try{var a=t[o](l),h=a.value}catch(t){return void n(t)}a.done?e(h):Promise.resolve(h).then(r,i)}function d(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var o=t.apply(e,n);function l(t){f(o,r,i,l,a,"next",t)}function a(t){f(o,r,i,l,a,"throw",t)}l(void 0)})}}function x(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(t,e){return e},a=function(t){var e,n,r,i,a=c.a.get(t,"color.method","manual"),h=c.a.get(t,"color.".concat(a));switch(a){case"manual":e=c.a.get(h,"fill","#000000");break;default:n=c.a.get(h,"dark","#000000"),r=c.a.get(h,"light","#ffffff"),i=c.a.get(h,"background","#ffffff"),e=function(t){return l.Colors.getContrastYIQ(t.inside?Object(o.rgb)(t.color).hex():Object(o.rgb)(i).hex(),Object(o.rgb)(n).hex(),Object(o.rgb)(r).hex())}}return e}(n),h=t.selectAll("text").data(e,r);h.transition().duration(0),h.exit().remove();var s=h.enter().append("text").style("opacity",i.eps);return(h=h.merge(s)).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("text-anchor",function(t){return t.textAnchor}).attr("fill",a).style("cursor","default").styles(c.a.omit(n,["color"])),h}function g(t){var e=c.a.get(t,"color.method","contrast"),n=c.a.get(t,"color.manual.stroke"),r=c.a.get(t,"color.manual.fill","#000000");return{manual:"manual"===e&&n&&Object(o.rgb)(n).toString()!==Object(o.rgb)(r).toString(),stroke:n,fill:r}}function p(t,e,n){var r=g(e);if(t.selectAll("tspan").remove(),r.manual){var i=r.stroke,o=r.fill;t.append("tspan").attr("class","text-outline").attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).attr("stroke",i).attr("fill",i).attr("stroke-width","3px").attr("stroke-linejoin","round").text(n),t.append("tspan").attr("class","text-outline-fill").attr("fill",o).attr("x",function(t){return t.textX}).attr("y",function(t){return t.textY}).text(n)}else t.text(n)}function y(t){for(var e,n,i=t.data,o=t.metrics,l=t.style,a=[],h=[],s=function(t,e){var n=o.collection[e],i=Object(r.extendBBox)({x:t.xPos,y:t.yPos-t.height/2+.25*n.height-n.baseLineOffset,width:n.width,height:n.height});return i.xLabel=t.xLabel,i},u=i.length,c=0;c<u;c++){var f=i[c];if(null===f.x&&h.push(c),-1===h.indexOf(c))for(var d=s(f,c),x=0;x<u;x++){var g=i[x];if(-1===h.indexOf(x)){var p=s(g,x);c===x||(n=p,(e=d).x>n.x2||e.x2<n.x||e.y>n.y2||e.y2<n.y)||h.push(x)}}}return i.forEach(function(t,e){if(-1===h.indexOf(e)){var n={},r=o.collection[e].height;n.inside=!0,n.fillColor=l.color,n.textX=t.xPos+t.width/2,n.textY=Math.round(t.yPos-t.height/2+.25*r),n.transform=null,n.textAnchor="middle",n.text=t.yLabel,n.index=e,n.seriesIdx=t.seriesIdx,n.yLabel=t.yLabel,n.xLabel=t.xLabel,n.groupLabel=t.groupLabel,n.categoryLabel=t.categoryLabel,n.color=t.color,a.push(n)}}),a}function m(t){var e=t.data,n=t.metrics,r=t.style,i=t.scale,o=t.valuesOutside,l=[],h=Object(a.max)(i.range()),s=.25*n.height;return e.forEach(function(t,e){if(null!==t.x){var i,a={},u=t.yPos,c=u,f="start",d=u,x=h-u,g=1,p=!0,y=n.collection[e].width+s,m=Math.abs(t.height),v=!o&&m>y;t.y<0&&(f="end",d=x,x=u,g=-1),v?c-=g*s:d>=m+y?c-=g*(m+s):x>=y?(c+=g*s,f="end"===f?"start":"end"):p=!1,p&&(a.inside=v,a.fillColor=r.color,a.textX=i=t.xPos+t.width/2+s,a.textY=c,a.transform="rotate(-90,".concat(i,",").concat(c,")"),a.textAnchor=f,a.text=t.yLabel,a.index=e,a.seriesIdx=t.seriesIdx,a.yLabel=t.yLabel,a.xLabel=t.xLabel,a.groupLabel=t.groupLabel,a.categoryLabel=t.categoryLabel,a.color=t.color,l.push(a))}}),l}function v(t){var e=t.data,n=t.style,r=t.scale,i=t.metrics,o=t.valuesOutside,l=Object(a.max)(r.range()),h=[];return e.forEach(function(t,e){var r=t.y,a=t.xPos,s=t.yPos,u=t.width,c=t.height,f=t.seriesIdx,d=t.xLabel,x=t.yLabel,g=t.groupLabel,p=t.categoryLabel,y=t.color,m=s,v=s,b=l-s,w=1,L=!0,E=i.collection[e],z=.25*E.height,M=E.height,O=M+z,S=Math.abs(c),P=!o&&S>O;r<0&&(v=b,b=s,w=-1),P?m-=w*(r<0?M-1:z):v>=S+O?m-=w*(S+(r<0?M-1:z)):b>=O?m+=w*(r<0?z+1:M):L=!1,L&&h.push({inside:P,fillColor:n.color,textX:a+u/2,textY:m,transform:null,textAnchor:"middle",text:x,index:e,seriesIdx:f,yLabel:x,xLabel:d,groupLabel:g,categoryLabel:p,color:y})}),h}function b(t){var e=t.data,n=t.metrics,r=t.style,i=t.horizontal,o=[],l=n.height,a=l-n.baseLineOffset,h=.25*l;return e.forEach(function(t,e){if(null!==t.x){var l={},s=n.collection[e],u=i?"width":"height",c=i?"height":"width",f=Math.abs(t.width),d=Math.abs(t.height),x=s[u],g=s[c],p=x<=f&&g+(i?h-a:h)<=d,y=t.y<0,m=y?-1:1,v=t.xPos+t.width/2+h,b=t.yPos-m*h;p&&(l.y=t.y,l.inside=!0,l.fillColor=r.color,l.textX=v,l.textY=b,l.textAnchor=y?"end":"start",l.transform="rotate(-90,".concat(v,",").concat(b,")"),i&&(l.textAnchor="middle",l.transform=null,l.textX=t.xPos+t.width/2,l.textY=t.yPos-m*(y?n.baseLineOffset+1:h)),l.yLabel=t.yLabel,l.xLabel=t.xLabel,l.groupLabel=t.groupLabel,l.categoryLabel=t.categoryLabel,l.text=t.yLabel,l.seriesIdx=t.seriesIdx,l.color=t.color,o.push(l))}}),o}function w(t){var e=t.metrics,n=t.data,r=t.isStacked,i=c.a.get(n,"[0].width",0),o=i>=e.height,l=i>=e.width;if(!r)return{vertical:o,horizontal:l};var a={horizontal:0,vertical:0},h=e.height,s=h-e.baseLineOffset,u=.25*h,f=u-s;e.collection.reduce(function(t,e,r){var i=n[r],o=Math.abs(i.width),l=Math.abs(i.height),a=e.height+f,h=e.width+u;return t.horizontal+=+(e.width<=o&&a<=l),t.vertical+=+(h<=l&&e.height<=o),t},a);var d=0===a.horizontal&&a.horizontal===a.vertical;return l=a.horizontal>=a.vertical,{horizontal:l=!d&&l,vertical:!d&&!l}}function L(t){var e=t.dispatch,n=t.legend,i=t.opacity,o=void 0===i?null:i,l=t.tooltip,a=t.chartId,s=t.tooltipText,u=t.tooltipValue,c=t.colors;return function(t){t.classed("igc-chart-link",function(t){return!(!t||!t.link)}).on("mouseover",function(){l().interaction("show")}).on("mousemove",function(t){var e,i,f=Object(r.getMousePosition)(h.event),d=t.color||Object(r.getColor)(t.seriesIdx,c);e=s(t),i=u(t),l().setText(e).setValue(i).setPosition(f,d),null!==o&&n&&n.sendListeners(t.seriesIdx,a,"highlightStart")}).on("mouseout",function(t){l().hide(),null!==o&&n&&n.sendListeners(t.seriesIdx,a,"highlightEnd")}).on("click",function(t){e.call("openUrl",null,t.link)})}}function E(t){var e=t.textStyle,n=t.showValues,i=t.scale,o=t.isWaterfall,l=t.isStacked,a=t.valuesOutside,h=t.textFormat,s=t.transitionTiming,u=t.addMouseEvents,c=t.listenToLegendText,f=t.opacity,g=0;return function(){var t=d(regeneratorRuntime.mark(function t(d,L){var E,z,M,O,S,P,k,j;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(j=function(){u(k.filter(function(t){return t.inside})),c(k)},d.selectAll("text").transition().duration(0).remove(),n){t.next=4;break}return t.abrupt("return");case 4:if(E=L.map(function(t){return h({text:t.yLabel})}),z=Object(r.getAllTextDimensions)(E,d,e),M=w({metrics:z,data:L,isStacked:l}),O=M.horizontal||M.vertical,S=[],!O){t.next=14;break}P={data:L,metrics:z,style:e,scale:i},o?S=y(P):l?(P.horizontal=M.horizontal,S=b(P)):M.horizontal?(P.valuesOutside=a,S=v(P)):(P.valuesOutside=a,S=m(P)),t.next=15;break;case 14:return t.abrupt("return");case 15:if(S.length){t.next=17;break}return t.abrupt("return");case 17:return(k=x(d,S,e)).attr("transform",function(t){return t.transform}),p(k,e,h),t.abrupt("return",new Promise(function(t){k.transition().duration(s.duration.text).style("opacity",f||1).on("start",function(){return g++}).on("end",function(){--g||(j(),t())})}));case 21:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}function z(t){var e=t.data,n=t.metrics,r=t.style,i=t.xScale,o=t.yScale,l=t.dataPointRadius,a=t.valueProperty,h=void 0===a?"yLabel":a,u=[],c=[],f=[],d=i.bandwidth?i.bandwidth()/2:0,x=Math.max.apply(null,o.range()),g=Math.max.apply(null,i.range()),p=new s({width:g,height:x});return e.forEach(function(t,e){var r=n.collection[e],a={x:i(t.x)-r.width/2+d,y:o(t.y)-l-r.baseLineOffset,width:r.width,height:r.height,index:e};p.push(a)}),p.each(function(t){var e=p.colliding(t).length;e&&f.push({collisions:e,item:t})}),f.sort(function(t,e){return e.collisions-t.collisions}),f.forEach(function(t){var e=t.item;p.colliding(e).length&&(p.remove(e),c.push(e.index))}),e.forEach(function(t,e){if(-1===c.indexOf(e)){var n={};n.fillColor=r.color,n.textX=i(t.x)+d,n.textY=o(t.y)-l,n.textAnchor="middle",n.text=t[h],n.yPct=t.yPct,n.index=e,n.seriesIdx=t.seriesIdx,n.yLabel=t.yLabel,n.xLabel=t.xLabel,n.groupLabel=t.groupLabel,n.categoryLabel=t.categoryLabel,n.color=t.color,u.push(n)}}),u}function M(t){var e=t.textStyle,n=t.showValues,i=t.textFormat,o=t.transitionTiming,l=t.listenToLegendText,a=t.addMouseEvents,h=void 0===a?function(){}:a,s=t.opacity,u=t.xScale,c=t.yScale,f=t.dataPointRadius,g=t.valueProperty,y=void 0===g?"yLabel":g,m=0;return function(){var t=d(regeneratorRuntime.mark(function t(a,d){var g,v,b,w,L;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(L=function(){l(w),h(w)},a.selectAll("text").transition().duration(0).remove(),n){t.next=4;break}return t.abrupt("return");case 4:if(g=d.map(function(t){return i({text:t[y]})}),v=Object(r.getAllTextDimensions)(g,a,e),b=[],(b=z({data:d,metrics:v,style:e,xScale:u,yScale:c,dataPointRadius:f,valueProperty:y})).length){t.next=10;break}return t.abrupt("return");case 10:return p(w=x(a,b,e),e,i),t.abrupt("return",new Promise(function(t){w.transition().duration(o.duration.text).style("opacity",s||1).on("start",function(){return m++}).on("end",function(){--m||(L(),t())})}));case 13:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}},"tU/c":function(t,e,n){var r,i,o;i=[],void 0===(o="function"==typeof(r=function(){return function(){function t(e){var n,r;if(this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this.maxElements=e.maxElements,null==this.width||null==this.height)throw new Error("Missing quadtree dimensions.");if(null==this.x&&(this.x=0),null==this.y&&(this.y=0),null==this.maxElements&&(this.maxElements=1),this.contents=[],this.oversized=[],this.size=0,this.width<1||this.height<1)throw new Error("Dimensions must be positive integers.");if(!Number.isInteger(this.x)||!Number.isInteger(this.y))throw new Error("Coordinates must be integers");if(this.maxElements<1)throw new Error("The maximum number of elements before a split must be a positive integer.");for(n in r=this,this.children={NW:{create:function(){return new t({x:r.x,y:r.y,width:Math.max(Math.floor(r.width/2),1),height:Math.max(Math.floor(r.height/2),1),maxElements:r.maxElements})},tree:null},NE:{create:function(){return new t({x:r.x+Math.max(Math.floor(r.width/2),1),y:r.y,width:Math.ceil(r.width/2),height:Math.max(Math.floor(r.height/2),1),maxElements:r.maxElements})},tree:null},SW:{create:function(){return new t({x:r.x,y:r.y+Math.max(Math.floor(r.height/2),1),width:Math.max(Math.floor(r.width/2),1),height:Math.ceil(r.height/2),maxElements:r.maxElements})},tree:null},SE:{create:function(){return new t({x:r.x+Math.max(Math.floor(r.width/2),1),y:r.y+Math.max(Math.floor(r.height/2),1),width:Math.ceil(r.width/2),height:Math.ceil(r.height/2),maxElements:r.maxElements})},tree:null}},this.children)this.children[n].get=function(){return null!=this.tree?this.tree:(this.tree=this.create(),this.tree)}}var e,n,r,i,o,l,a,h;return i=function(t){var e,n;return{x:Math.floor((null!=(e=t.width)?e:1)/2)+t.x,y:Math.floor((null!=(n=t.height)?n:1)/2)+t.y}},e=function(t,e){var n,r,i,o;return!(t.x>=e.x+(null!=(n=e.width)?n:1)||t.x+(null!=(r=t.width)?r:1)<=e.x||t.y>=e.y+(null!=(i=e.height)?i:1)||t.y+(null!=(o=t.height)?o:1)<=e.y)},n=function(t,e){var n;return n=i(e),t.x<n.x?t.y<n.y?"NW":"SW":t.y<n.y?"NE":"SE"},h=function(t){if("object"!=typeof t)throw new Error("Element must be an Object.");if(null==t.x||null==t.y)throw new Error("Coordinates properties are missing.");if((null!=t?t.width:void 0)<0||(null!=t?t.height:void 0)<0)throw new Error("Width and height must be positive integers.")},l=function(t){var e,n,r,i;return n=Math.max(Math.floor(t.width/2),1),r=Math.ceil(t.width/2),i=Math.max(Math.floor(t.height/2),1),e=Math.ceil(t.height/2),{NW:{x:t.x,y:t.y,width:n,height:i},NE:{x:t.x+n,y:t.y,width:r,height:i},SW:{x:t.x,y:t.y+i,width:n,height:e},SE:{x:t.x+n,y:t.y+i,width:r,height:e}}},r=function(t,n){var r,i,o,a;for(i in a=[],o=l(n))r=o[i],e(t,r)&&a.push(i);return a},o=function(t,e){var n;return(n=function(n){return t["_"+n]=t[n],Object.defineProperty(t,n,{set:function(t){return e.remove(this,!0),this["_"+n]=t,e.push(this)},get:function(){return this["_"+n]},configurable:!0})})("x"),n("y"),n("width"),n("height")},a=function(t){var e;return(e=function(e){if(null!=t["_"+e])return delete t[e],t[e]=t["_"+e],delete t["_"+e]})("x"),e("y"),e("width"),e("height")},t.prototype.clear=function(){var t,e;for(t in this.contents=[],this.oversized=[],this.size=0,e=[],this.children)e.push(this.children[t].tree=null);return e},t.prototype.push=function(t,e){return this.pushAll([t],e)},t.prototype.pushAll=function(t,e){var n,i,l,a,s,u,c,f,d,x,g,p,y,m,v,b,w,L,E,z;for(g=0,m=t.length;g<m;g++)x=t[g],h(x),e&&o(x,this);for(c=[{tree:this,elements:t}];c.length>0;){for(z=(w=c.shift()).tree,f={NW:null,NE:null,SW:null,SE:null},p=0,v=(u=w.elements).length;p<v;p++)if(s=u[p],z.size++,1!==(d=r(s,z)).length||1===z.width||1===z.height)z.oversized.push(s);else if(z.size-z.oversized.length<=z.maxElements)z.contents.push(s);else{for(a=d[0],E=z.children[a],null==f[a]&&(f[a]={tree:E.get(),elements:[]}),f[a].elements.push(s),y=0,b=(L=z.contents).length;y<b;y++)i=L[y],null==f[l=r(i,z)[0]]&&(f[l]={tree:z.children[l].get(),elements:[]}),f[l].elements.push(i);z.contents=[]}for(a in f)null!=(n=f[a])&&c.push(n)}return this},t.prototype.remove=function(t,e){var r,i;return h(t),(r=this.oversized.indexOf(t))>-1?(this.oversized.splice(r,1),this.size--,e||a(t),!0):(r=this.contents.indexOf(t))>-1?(this.contents.splice(r,1),this.size--,e||a(t),!0):!(null==(i=this.children[n(t,this)]).tree||!i.tree.remove(t,e)||(this.size--,0===i.tree.size&&(i.tree=null),0))},t.prototype.colliding=function(t,n){var i,o,l,a,s,u,c,f,d,x,g,p,y,m;for(null==n&&(n=e),h(t),s=[],l=[this];l.length>0;){for(u=0,d=(p=(m=l.shift()).oversized).length;u<d;u++)(o=p[u])!==t&&n(t,o)&&s.push(o);for(c=0,x=(y=m.contents).length;c<x;c++)(o=y[c])!==t&&n(t,o)&&s.push(o);for(0===(a=r(t,m)).length&&(a=[],t.x>=m.x+m.width&&a.push("NE"),t.y>=m.y+m.height&&a.push("SW"),a.length>0&&(1===a.length?a.push("SE"):a=["SE"])),f=0,g=a.length;f<g;f++)i=a[f],null!=m.children[i].tree&&l.push(m.children[i].tree)}return s},t.prototype.onCollision=function(t,n,i){var o,l,a,s,u,c,f,d,x,g,p,y,m;for(null==i&&(i=e),h(t),a=[this];a.length>0;){for(u=0,d=(p=(m=a.shift()).oversized).length;u<d;u++)(l=p[u])!==t&&i(t,l)&&n(l);for(c=0,x=(y=m.contents).length;c<x;c++)(l=y[c])!==t&&i(t,l)&&n(l);for(0===(s=r(t,m)).length&&(s=[],t.x>=m.x+m.width&&s.push("NE"),t.y>=m.y+m.height&&s.push("SW"),s.length>0&&(1===s.length?s.push("SE"):s=["SE"])),f=0,g=s.length;f<g;f++)o=s[f],null!=m.children[o].tree&&a.push(m.children[o].tree)}return null},t.prototype.get=function(t){return this.where(t)},t.prototype.where=function(t){var e,r,i,o,l,a,s,u,c,f,d,x,g;if("object"==typeof t&&(null==t.x||null==t.y))return this.find(function(e){var n,r;for(r in n=!0,t)t[r]!==e[r]&&(n=!1);return n});for(h(t),o=[],i=[this];i.length>0;){for(l=0,u=(f=(g=i.shift()).oversized).length;l<u;l++){for(s in r=f[l],e=!0,t)t[s]!==r[s]&&(e=!1);e&&o.push(r)}for(a=0,c=(d=g.contents).length;a<c;a++){for(s in r=d[a],e=!0,t)t[s]!==r[s]&&(e=!1);e&&o.push(r)}null!=(x=g.children[n(t,g)]).tree&&i.push(x.tree)}return o},t.prototype.each=function(t){var e,n,r,i,o,l,a,h,s,u;for(n=[this];n.length>0;){for(i=0,l=(h=(u=n.shift()).oversized).length;i<l;i++)r=h[i],"function"==typeof t&&t(r);for(o=0,a=(s=u.contents).length;o<a;o++)r=s[o],"function"==typeof t&&t(r);for(e in u.children)null!=u.children[e].tree&&n.push(u.children[e].tree)}return this},t.prototype.find=function(t){var e,n,r,i,o,l,a,h,s,u,c;for(n=[this],i=[];n.length>0;){for(o=0,a=(s=(c=n.shift()).oversized).length;o<a;o++)r=s[o],("function"==typeof t?t(r):void 0)&&i.push(r);for(l=0,h=(u=c.contents).length;l<h;l++)r=u[l],("function"==typeof t?t(r):void 0)&&i.push(r);for(e in c.children)null!=c.children[e].tree&&n.push(c.children[e].tree)}return i},t.prototype.filter=function(e){var n;return(n=function(r){var i,o,l,a,h,s,u,c,f,d,x;for(i in(o=new t({x:r.x,y:r.y,width:r.width,height:r.height,maxElements:r.maxElements})).size=0,r.children)null!=r.children[i].tree&&(o.children[i].tree=n(r.children[i].tree),o.size+=null!=(c=null!=(f=o.children[i].tree)?f.size:void 0)?c:0);for(a=0,s=(d=r.oversized).length;a<s;a++)l=d[a],(null==e||("function"==typeof e?e(l):void 0))&&o.oversized.push(l);for(h=0,u=(x=r.contents).length;h<u;h++)l=x[h],(null==e||("function"==typeof e?e(l):void 0))&&o.contents.push(l);return o.size+=o.oversized.length+o.contents.length,0===o.size?null:o})(this)},t.prototype.reject=function(t){return this.filter(function(e){return!("function"==typeof t?t(e):void 0)})},t.prototype.visit=function(t){var e,n,r;for(n=[this];n.length>0;)for(e in r=n.shift(),t.bind(r)(),r.children)null!=r.children[e].tree&&n.push(r.children[e].tree);return this},t.prototype.pretty=function(){var t,e,n,r,i,o,l;for(o="",n=function(t){var e,n,r;for(r="",e=n=t;n<=0?e<0:e>0;n<=0?++e:--e)r+="   ";return r},e=[{label:"ROOT",tree:this,level:0}];e.length>0;){for(t in o+=(r=n((l=e.shift()).level))+"| "+l.label+"\n"+r+"| ------------\n",l.tree.oversized.length>0&&(o+=r+"| * Oversized elements *\n"+r+"|   "+l.tree.oversized+"\n"),l.tree.contents.length>0&&(o+=r+"| * Leaf content *\n"+r+"|   "+l.tree.contents+"\n"),i=!1,l.tree.children)null!=l.tree.children[t].tree&&(i=!0,e.unshift({label:t,tree:l.tree.children[t].tree,level:l.level+1}));i&&(o+=r+"└──┐\n")}return o},t}()})?r.apply(e,i):r)||(t.exports=o)}}]);