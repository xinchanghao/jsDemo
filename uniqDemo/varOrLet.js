/**
 * [360春招笔试]
 * @type {Number}
 */
// let z = 10; //输出结果为undefined
var z = 10;

function f() {
  console.log(z);
  z = 20;
  ++z;
}

f();
