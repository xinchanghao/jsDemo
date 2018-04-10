/**
 * 快速排序
 * 快速排序思想：先找到一个基准点（一般指数组的中部），然后数组被该基准点分为两部分，
 * 依次与该基准点数据比较，如果比它小，放左边；反之，放右边。
 * 左右分别用一个空数组去存储比较后的数据。最后递归执行上述操作，直到数组长度<=1;
 * 最佳情况：T(n) = O(nlogn)
 * 最差情况：T(n) = O(n2)
 * 平均情况：T(n) = O(nlogn)
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
let times=0;
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  var minIndex = Math.floor(arr.length/2); //取基准点
  var minNum = arr.splice(minIndex, 1); //取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数arr[index+1]

  var left = [], right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
    console.log("第"+(++times)+"次排序后："+arr);
  }
  //递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
  return quickSort(left).concat(minNum, quickSort(right));
}

let arr = [5,6,3,1,8,7,2,4];
console.log(quickSort(arr));
