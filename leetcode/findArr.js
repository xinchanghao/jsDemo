/**
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，
 * 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param       {[type]} target [description]
 * @param       {[type]} array  [description]
 * @constructor
 */
function Find(target, array){
    var len = array.length - 1;
    var i = 0;
    while((len >=0) && (i <= array[0].length)){
        if (target < array[len][i]){
            len--;
        }else if (target > array[len][i]){
            i++;
        }else if (target == array[len][i]){
          return true;
        } else {
            return false
        }
    }
    return false;
}
