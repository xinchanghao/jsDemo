/**
 * 事件委托demo
 */
/*
<ul id="list">
     <li id="do1">111</li>
     <li id="do2">222</li>
     <li id="do3">333</li>
     <li id="do4">444</li>
</ul>
 */

//demo1：需要触发每个li来进行事件
window.onload = function() {
    var list = document.getElementById("list");
    list.onmouseover = function (ev) {
        //ie：window.event.srcElement
        //标准下:event.target
        var even = ev || window.event;
        var target = even.target || even.srcElement;
        switch (target.id) {
            case "do1":
                target.style.background = "red";
                break;
            case "do2":
                target.style.background = "yellow";
                break;
            case "do3":
                window.location.href = "#";
                break;
            case  "do4":
                document.title = "this is a demo"
                break;
        }
    }
}


/*
 <input type="button" id="btn"/>
 <ul id="list">
 <li >111</li>
 <li >222</li>
 <li >333</li>
 <li >444</li>
 </ul>
 */
//demo2:动态的添加li,点击button动态添加li
window.onload = function(){
    var oBtn = document.getElementById("btn");
    var list = document.getElementById("list");
    var listson = list.getElementsByTagName('li');
    var num = 4;

    //事件委托，添加的子元素也有事件
    list.onmouseover = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            target.style.background = "red";
        }

    };
    list.onmouseout = function(ev){
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase() == 'li'){
            target.style.background = "#fff";
        }

    };

    //添加新节点
    oBtn.onclick = function(){
        num++;
        var newlist = document.createElement('li');
        newlisti.innerHTML = 111*num;
        list.appendChild(oLi);
    };
}
