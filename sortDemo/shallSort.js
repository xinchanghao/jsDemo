/**
 * 希尔排序
 * 1. 先将整个待排元素序列分割为若干个子序列（由相隔某个‘增量’的元素组成的）分别进行直接插入排序，
 * 2. 然后依次缩减增量再进行排序，带这个序列中的元素基本有序（增量足够小）时，
 * 3. 再对全体元素进行一次直接插入排序。
 * 因为直接插入排序在元素基本有序的情况下（接近最好情况）效率是很高的，
 * 因此希尔排序在时间效率上有较大的提高。
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 */

function shallSort(array) {
  var increment = array.length;
  var i
  var temp; //暂存
  var count = 0;
  do {
    //设置增量
   increment = Math.floor(increment / 3) + 1;
   for (i = increment ; i < array.length; i++) {
    console.log(increment);
     if (array[i] < array[i - increment]) {
       temp = array[i];
       for (var j = i - increment; j >= 0 && temp < array[j]; j -= increment) {
           array[j + increment] = array[j];
       }
       array[j + increment] = temp;
     }
   }
  }
  while (increment > 1)
  return array;
}
