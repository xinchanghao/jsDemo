/********
实现数组随机排序
*********/

var arr = [1,2,3,4,5,6,7,8,9,10];

/**
 * 方法一
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
var randSort1 = (arr) => {
  for (var i = 0, len = arr.length; i < len; i++) {
    var rand = parseInt(Math.random() * len);
    var temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

var randSort2 = (arr) => {
  var result = [];
  while (arr.length > 0) {
    var rand = parseInt(Math.random() * arr.length);
    result.push(arr[rand]);
    arr.splice(rand, 1);
  }
  return result;
}

arr.sort(function(){
  	return Math.random() - 0.5;
})
console.log(arr);
