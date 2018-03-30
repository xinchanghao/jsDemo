/**
 * 冒泡排序
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
  console.log(arr);
}
let arr = [5,6,3,1,8,7,2,4];
bubbleSort(arr);
