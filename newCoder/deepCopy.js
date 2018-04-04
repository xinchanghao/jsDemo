/********
js实现深拷贝
*********/
var deepCopy = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //json对象转字符串，系列化
        newobj = JSON.parse(str); //还原为json对象
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ?
            deepCopy(obj[i]) : obj[i];
        }
    }
    return newobj;
};
