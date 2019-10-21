/********
css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage

示例输入:'font-size';
示例输出：fontSize
*********/

/**
 * 方法一
 * @param  {[type]} sName [description]
 * @return {[type]}       [description]
 */

function cssStyle2DomStyle(sName) {
    var arr = sName.split(''); 
    //判断第一个是不是 '-'，是的话就删除
    if(arr.indexOf('-') == 0)
        arr.splice(0,1);
   //处理剩余的'-'
    for(var i=0; i<arr.length; i++){
        if(arr[i] == '-'){
            arr.splice(i,1);
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}

/**
 * 方法二
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
return sName.replace(/\-[a-z]/g , function(a, b){
 
    return b == 0 ? a.replace('-','') : a.replace('-','').toUpperCase();
 
});
cssStyle2DomStyle('font-size');
