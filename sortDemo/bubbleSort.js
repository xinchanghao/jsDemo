/**
 * 冒泡排序
 * 冒泡排序思想：每一次对比相邻两个数据的大小，小的排在前面，如果前面的数据比后面的大就交换这两个数的位置
 * 要实现上述规则需要用到两层for循环，外层从第一个数到倒数第二个数，内层从外层的后面一个数到最后一个数
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
const bubbleSort = (arr) => {
  var len = arr.length;
  for(let i = len - 1; i > 0; i--){
    for (let j = 0; j < i; j++){
      if (arr[j] > arr[j+1]){
        let temp = arr[j+1]
        arr[j+1] = arr[j];
        arr[j] = temp;
       }
    }
  }
  return arr;
}
let arr = [5,6,3,1,8,7,2,4];
console.log(bubbleSort(arr));
