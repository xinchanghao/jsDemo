/**
 * 声明式函数和赋值式函数执行顺序
 * @return {[type]} [description]
 */

var f = function (x, y) {
  return x - y;
}

function f(x, y) {
  return x + y;
}

var a = f(1, 2);

console.log(a); // -1

// 声明函数的优先级大于赋值函数，即 function 的优先级大于 var 为什么调用了赋值函数？
// 详情 ： https://blog.csdn.net/kong1989winner/article/details/39434445
