(function(){var barra,barra_a,canvas,overlay,content;var body,body_of;var host;function pega_host()
{var parser=document.createElement('a');var scripts=document.getElementsByTagName('script');parser.href=scripts[scripts.length-1].src;host=parser.host}
function carrega_canvas()
{var frame=document.createElement('iframe');frame.setAttribute('frameborder','0');frame.setAttribute('scrolling','no');frame.setAttribute('src','https://'+host+'/barra-fgv');canvas.appendChild(frame)}
function click()
{if(canvas.style.display=='none')
{if(canvas.innerHTML=='')
carrega_canvas();canvas.style.display=overlay.style.display='block';barra_a.setAttribute('class','ativo')}
else{canvas.style.display=overlay.style.display='none';barra_a.setAttribute('class','')}
return!1}
function ready()
{body=document.getElementsByTagName('body');if(!body)
return;body=body[0];body.className+=' barrafgv-processed';body_of=body.style.overflow;barra=document.createElement('div');barra.setAttribute('id','barra-fgv');content=document.createElement('div');content.setAttribute('class','content');barra_a=document.createElement('a');barra_a.setAttribute('id','barra-fgv-a');barra_a.href='https://'+host+'/';barra_a.innerHTML='FGV';barra.appendChild(content);content.appendChild(barra_a);body.insertBefore(barra,body.firstChild);canvas=document.createElement('div')
canvas.setAttribute('id','barra-fgv-canvas');canvas.style.display='none';content.appendChild(canvas);overlay=document.createElement('div');overlay.setAttribute('id','barra-fgv-overlay');body.appendChild(overlay);overlay.onmouseover=function(){if(canvas.style.display!='none')
click();return!1};var orig_w_onkeyup=window.onkeyup;window.onkeyup=function(ev)
{if(!ev)ev=window.event;var key;if(ev.keyCode)
key=ev.keyCode;else if(ev.which)
key=ev.which;if(key==27&&canvas.style.display!='none')
click();if(orig_w_onkeyup!=null)
orig_w_onkeyup(ev);return!0};barra_a.onclick=click;var over_timer=null;barra_a.onmouseover=function(){over_timer=setTimeout(function(){over_timer=null;click()},150)};barra_a.onmouseout=function(){if(over_timer)
{clearTimeout(over_timer);over_timer=null}}}
function inclui_css()
{document.write('<link type="text/css" rel="stylesheet" href="'+document.location.protocol+'//'+host+'/sites/all/libraries/barrafgv/embed.css" />')}
var DOMReady=(function(){var fns=[],isReady=!1,errorHandler=null,getFunc=function(fn){if(typeof fn=='string')
return function(){eval(fn)};return fn},ready=function(){isReady=!0;for(var x=0;x<fns.length;x++){try{fns[x]()}catch(err){if(errorHandler)
errorHandler(err)}}};this.setOnError=function(fn){errorHandler=getFunc(fn);return this};this.add=function(fn){fn=getFunc(fn);if(isReady){fn()}else{fns[fns.length]=fn}
return this};if(window.addEventListener){document.addEventListener('DOMContentLoaded',function(){ready()},!1)}else{(function(){if(!document.uniqueID&&document.expando)return;var tempNode=document.createElement('document:ready');try{tempNode.doScroll('left');ready()}catch(err){setTimeout(arguments.callee,0)}})()}
return this})();pega_host();inclui_css();DOMReady.add(ready)})()