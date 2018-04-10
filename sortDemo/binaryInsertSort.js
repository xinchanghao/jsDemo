/**
 * 二分法插入排序
 * 从第一个元素开始，该元素可以认为已经被排序；
 * 取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置；
 * 将新元素插入到该位置后；
 * 重复上述两步
 * 算法分析
 * 最佳情况：T(n) = O(nlogn)
 * 最差情况：T(n) = O(n2)
 * 平均情况：T(n) = O(n2)
 * @param  {array} arr 需要排序的数组
 * @return {array}     排序后的数组
 */
function binaryInsertSort(arr){
    for (var i = 1; i < arr.length; i++) {
      var key = arr[i], left = 0, right = i - 1;
      while (left <= right) {
        var middle = parseInt((left + right) / 2);
        if (key < arr[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (var j = i - 1; j >= left; j--) {
        arr[j + 1] = arr[j];
      }
      arr[left] = key;
    }
    return arr;
}
