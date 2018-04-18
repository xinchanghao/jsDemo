/**
 * 你真的能写出下面的代码输出值吗？
 * @type {Object}
 */

//code 1
var obj = {
    a: 1,
    b: function () {
        console.log(this.a)
    }
};
var a = 2;
var objb = obj.b;
obj.b();                //1
objb();                 //2
obj.b.call(window);     //2

//code 2
function A() {
}
function B(a) {
    this.a = a;
}
function C(a) {
    if (a) {
        thia.a = a;
    }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;
console.log(new A());   //A{}  返回obj,浅克隆构造函数
console.log(new B());   //B{a:undefined}
console.log(new C(2));  //C{}


//code 3
var a = 1;
function b() {
    var a = 2;
    function c() {
        console.log(a);
    }
    return c;
}
b()();  //2
