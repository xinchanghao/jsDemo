/**
 * H5 提供了很多简单实用的 API，Page Visibility API 就是其中之一。
 * @return {[type]} [description]
 */

document.addEventListener('visibilitychange', function() {
  var isHidden = document.hidden;
  if (isHidden) {
    // 动画停止
    // 服务器轮询停止 等等
  } else {
    // 动画开始
    // 服务器轮询
  }
});


/**
 * 提供一个兼容各高级浏览器以及低版本 IE 写法（低版本 IE 用 onfocus/onblur 兼容）：
 */
 (function() {
   var hidden = "hidden";

   // Standards:
   if (hidden in document)
     document.addEventListener("visibilitychange", onchange);
   else if ((hidden = "mozHidden") in document)
     document.addEventListener("mozvisibilitychange", onchange);
   else if ((hidden = "webkitHidden") in document)
     document.addEventListener("webkitvisibilitychange", onchange);
   else if ((hidden = "msHidden") in document)
     document.addEventListener("msvisibilitychange", onchange);
   // IE 9 and lower:
   else if ("onfocusin" in document)
     document.onfocusin = document.onfocusout = onchange;
   // All others:
   else
     window.onpageshow = window.onpagehide
     = window.onfocus = window.onblur = onchange;

   function onchange (evt) {
     var v = "visible", h = "hidden",
         evtMap = {
           focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
         };

     evt = evt || window.event;
     if (evt.type in evtMap)
       document.body.className = evtMap[evt.type];
     else
       document.body.className = this[hidden] ? "hidden" : "visible";
   }

   // set the initial state (but only if browser supports the Page Visibility API)
   if( document[hidden] !== undefined )
     onchange({type: document[hidden] ? "blur" : "focus"});
 })();
