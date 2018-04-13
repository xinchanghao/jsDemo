/**
 * 数组去重
 * @return {[type]} [description]
 */

Array.prototype.uniq = function () {
   var arr = [];
   var flag = true;
   this.forEach(function(item) {
     // 排除 NaN (重要！！！)
     if (item != item) {
       flag && arr.indexOf(item) === -1 ? arr.push(item) : '';//push这个地方一定要与后面的冒号之间有空格否则会出错
       flag = false;
     } else {
       arr.indexOf(item) === -1 ? arr.push(item) : ''
     }
   });
   return arr;
}

var arra = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
arra.uniq();

Array.prototype.uniq = () => {
  var arr = [];
  var flag = true;
  this.forEach((item, index) => {
    if( item != item) {
      flag && arr.indexOf(item) === -1 ? arr.push(item) : '';
      flag = false;
    } else {
      arr.indexOf(item) === -1 ? arr.push(item) : '';
    }
  });
  return arr;
}
