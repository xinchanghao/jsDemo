/********
  统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
  1. 不限制 key 的顺序
  2. 输入的字符串参数不会为空
  3. 忽略空白字符
示例输入:'hello world';
示例输出：{h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
*********/

/**
 * [count 方法一]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function count(str) {
    str = str.replace(/\s/g, ''); // \s去掉字符串中的空格
    var result = {};
    for (var i = 0; i < str.length; i++) {
        if (result[str.charAt(i)]) {
            result[str.charAt(i)] ++
        } else {
            result[str.charAt(i)] = 1;
        }
    }
    return result;
}

/**
 * [count 方法二]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function count(str) {
    var obj = {};
    str.replace(/\S/g,function(s){  // \S表示匹配非空字符串，函数中的s参数为匹配到的每一项
        !obj[s]?obj[s]=1:obj[s]++;
    })
    return obj;
}
