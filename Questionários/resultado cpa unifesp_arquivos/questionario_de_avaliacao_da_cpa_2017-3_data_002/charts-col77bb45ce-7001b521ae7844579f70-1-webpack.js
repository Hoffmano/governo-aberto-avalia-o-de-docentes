(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~infogram-charts/charts-area_stepped~infogram-charts/charts-column~infogram-charts/charts-col~77bb45ce"],{jiNK:function(t,e,i){"use strict";i.r(e),i.d(e,"Column",function(){return H});var a=i("eYsL"),r=i.n(a),n=i("vBe5"),o=i("ziQ1"),s=i("/TIM"),l=(i("iD6h"),i("+3eq")),c=i("30U6"),h=i("mb2s"),u=i("U/3o"),d=i("2LMz"),g=i("Io7g"),f=i("W3QS"),p=i("tb4o"),m=i("FNBR"),y=i("Z8Kf"),b=i("xuOt"),x=i("w9oG"),v=i("FVwI"),O=i("GBhQ"),S=i("QbiP"),j=i("7S+G"),w=i("AF4e"),k=i("t9/8"),C=i("8IAH"),L=i("pKNx"),D=i("fsSQ");function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function E(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t,e,i){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var a=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(a){var r=Object.getOwnPropertyDescriptor(a,e);return r.get?r.get.call(i):r.value}})(t,e,i||t)}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function G(t,e){return(G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object(D.putGraph)("column-grouped",x.ColumnGrouped);var H=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,A(e).apply(this,arguments))}var i,a,D;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(e,u["default"]),i=e,D=[{key:"getClassName",value:function(){return"Column"}}],(a=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.options,i=this.root,a=new j.Renderer({instance:this}),n=this.getSheetData(),c=Object(g.default)(n),u=this.runtime={width:e.width,height:e.height,components:{},layout:{},inanimate:Object(d.inanimated)(e),sheet:n,formatter:c},y=this.prepareSheetData(n,this.sheetIndex),b=u.categoryData=y[0].data.map(function(t){return t.xLabel});this.createTickIntervals(),Object(S.default)(this,{width:e.width}),Object(k.DownloadButton)(this,e.style.legend);var x=Object(O.legendHelper)({instance:this}),C=Object(O.legendFiltered)(this);if(x&&x.chartType("column"),!h.default.prototype.sheetsNotFound.call(this)&&!this.failSafeByHeight(40)){var L=u.margin=u.layout.margin={top:0,right:0,bottom:0,left:0},D=u.layout.marginTitle={left:0,right:0,top:0,bottom:0},T=u.layout.marginAxis={left:0,right:0},B=u.limits={maxCategoryWidth:0,maxCategoryHeight:0},E=u.bottomLabelPadding={top:6,right:2,bottom:0,left:2},I=u.xAxisOptions=n.axis[0],A=u.yAxisOptions=n.axis[1],G=e.style.axis.x,H=e.style.axis.y,W=e.style.grid,R=u.yDomain="absolute"!==e.series.data||C?this.getDomain(y):this.getSheetsSeriesDomain(),z=Object(v.limit)(A,R),N=R[0]<0,P=u.yScale=Object(o.scaleLinear)().domain(R).clamp(z);u.categoryLayout=n.categories.layout,u.columnWidth=n.categories.categoryWidth?Number(n.categories.categoryWidth):null,u.xScaleResize=u.columnWidth?function(t,e){t.rangeBandsFixed(e,u.columnWidth)}:function(t,e){t.rangeBandsPct(e)};var _=u.spacing={maxBeforeXAxisTick:50,beforeCategoryBorder:N&&"Waterfall"!==this.getClassName()?E.top:0,beforeBottomCategories:5},V=this.createAnimationCounter(y.length+2),U=u.components.yAxisLeftText=Object(p.default)().scale(P).orient("left").style(H.tick);if(b.length<1)return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();this.titleLayout(["x","y"]);var F=u.width-L.left-D.left-L.right-D.right,M={width:0,height:0};if(A.ticks){var Q=f.ScaleHelper.ticks(P,this.runtime.yTickInterval);M=this.yTicksMetrics(Q),T.left=M.width,L.top=M.height}var Z=u.height-L.top-D.top-L.bottom-D.bottom;B.maxCategoryHeight+=Math.floor(.27*Z),u.graphWidth=F-T.left-T.right,u.igcLeftOffset=L.left+D.left+T.left;var K=this.createXScale();B.maxCategoryWidth=K.rangeBand()+K.padding()-E.left-E.right,1===b.length&&(B.maxCategoryWidth=u.graphWidth-E.left-E.right);var X=this.createCategoryLabels();B.maxCategoryHeight=X.height+E.top+E.bottom,I.ticks||(B.maxCategoryHeight=1);var J=Object(f.Bottom)().style(G.tick).data(I.ticks?X.renderData:[]).textAlign(X.renderData.textAlign).bounds({height:B.maxCategoryHeight,y:Z-B.maxCategoryHeight+_.beforeBottomCategories}),q=u.graphHeight=Z-B.maxCategoryHeight-_.beforeCategoryBorder;P.rangeRound([q,0]);var Y=r.a.get(n,"graphOptions.column",{}),$=Y.showValues,tt=Y.valuesOutside;$&&tt&&this.adjustScaleDomainToOutsideValues(P,y,A);var et=u.components.yGridLines=Object(m.GridLines)().scale(P).orient(m.GridLines.ORIENTS.horizontal).tickSize(-F).highlightZero(n.grid.horizontalZeroHighlight).style(W).offset({left:-T.left}),it=Object(m.GridLines)().scale(K).orient(m.GridLines.ORIENTS.vertical).tickSize(q).highlightZero(n.grid.verticalZeroHighlight).style(W);n.grid.vertical||it.tickValues([]),U.textOffset(-.25*M.height).offset({left:-T.left}),this.yTicksSetup(),this.gridSetupHorizontal();var at=0;A.ticks&&(at=U.getBorderingTick()-M.height)>0&&(at=0),u.layout.firstTickOffset=at,this.titleComponents(["x","y"]);var rt=u.components,nt=rt.bottomTitle,ot=rt.leftTitle;nt.dispatch().on("animationEnd",V);var st={igc:{x:L.left+D.left+T.left,y:L.top+D.top}};u.inanimate&&Object(d.removeAnimation)([ot,nt,it,et,J,U]),this.containerSetup();var lt=i.select(".igc"),ct=l[e.animation.ease],ht=e.animation.duration;a.add(function(){i.attr("width",u.width).attr("height",u.height).transition().ease(ct).duration(ht).on("start",function(){t.events.call("startAnimation")}).on("end",function(){V()}),lt.attr("transform","translate(".concat(st.igc.x,", ").concat(st.igc.y,")"))}),a.addGrid(U,"igc-y-axis-text"),a.addGrid(et,"igc-ygrid"),a.addGrid(it,"igc-xgrid"),a.addGrid(J,"igc-x-axis-text"),a.addGraph([{graphs:y,x:K,y:P,textStyle:e.style.graph.item.value,outlineStyle:e.style.graph.item.outline,legend:x,tooltip:Object(w.createStyledTooltip)(this),transitionDuration:ht,animationEnd:V}]),n.grid.horizontal&&I.ticks?a.addGrid(function(t){t.each(function(){var t=Object(s.select)(this).selectAll(".igc-x-axis-border-line").data([0]),e=ht;0===t.size()&&(e=0),(t=t.merge(t.enter().append("rect"))).attr("class","igc-x-axis-border-line").transition().ease(ct).duration(e).attr("x",-T.left).attr("y",q+_.beforeCategoryBorder).attr("width",u.graphWidth+T.left).attr("height",2).styles({fill:W.color,stroke:"none","stroke-width":0})})},"igc-x-axis-border"):a.add(function(){i.select(".igc .igc-grid .igc-x-axis-border").remove()}),a.addTitle(ot,"igc-title-left"),a.addTitle(nt,"igc-title-bottom"),a.start()}}},{key:"graphInstanceSetup",value:function(t,e,i,a){var r=e.data.length,n=this.chartId,o=this.runtime.formatter,s=e.colors,h=a.legend,u=a.tooltip,g=this.graphData({data:e.data,behaviour:"Waterfall"===this.getClassName()?x.ColumnGrouped.BEHAVIOURS.WATERFALL:x.ColumnGrouped.BEHAVIOURS.COLUMN,colors:s}),f=Object(c.dispatch)("highlightStart","highlightEnd","animationStart","animationUpdateStart","animationEnterStart","animationEnd","animationUpdateEnd","animationEnterEnd","animationTextEnd","openUrl"),p=Object(C.createListenToLegend)({easing:l.easeLinear,ns:"shape",opacity:null,dispatch:f}),m=Object(L.createAddMouseEvents)({dispatch:f,legend:h,opacity:null,tooltip:u,chartId:n,tooltipText:function(t){return t.xLabel},tooltipValue:function(t){return o.tooltip.y.format(t.yLabel)},colors:s});h&&h.data().forEach(function(t,e){h.addListener({id:"".concat(n,"_").concat(e),dispatch:f})});var y=Object(d.removeDelay)(this,function(t,e){return e/r*(a.transitionDuration-200)});t.data(g).listenToLegend(p).addMouseEvents(m).dispatch(f).transitionDelay(y).transitionDuration(a.transitionDuration)}},{key:"createXScale",value:function(){var t=this.runtime,e=t.categoryData,i=t.graphWidth,a=t.xScaleResize,r=Object(n.range)(0,e.length),o=t.xScale=Object(y.Ordinal)().domain(r);return a(o,[0,i]),o}},{key:"emptySheetData",value:function(){return r.a.merge({},I(A(e.prototype),"emptySheetData",this).call(this),{series:[{axisIndex:1}],graphOptions:{column:{valuesOutside:!1}}})}},{key:"prepareSheetData",value:function(t,e){var i=r.a.get(t,"graphOptions.column",{}),a=i.showValues,n=i.valuesOutside,o={type:"column-grouped",colors:t.categories.colors,showValues:!!a,valuesOutside:!!n,data:[]},s=o.data,l=t.series[0];if(l.data.reduce(function(e,i,a){return null===(i=Object(b.replaceBlank)(i,null))?e:(e.push({x:0,xLabel:Object(b.replaceBlank)(t.categories.data[a]),y:i,yLabel:Object(b.replaceBlank)(l.rawData[a]),categoryIdx:a,seriesIdx:a,link:r.a.get(l,"links[".concat(a,"]"),null)}),e)},s),e===this.sheetIndex){var c=Object(O.createLegendData)(this);o.data=s.filter(function(t){return c({color:Object(b.getColor)(t.seriesIdx,o.colors),title:t.xLabel,groupId:t.seriesIdx}).active})}return[o]}}])&&B(i.prototype,a),D&&B(i,D),e}()}}]);