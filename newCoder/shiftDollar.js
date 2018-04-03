/********
如何将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为『12,000,000.11』?
*********/
var numm = 12000000.11
var shift = (num) => {
  return num && num.toString().replace(/(\d)(?=(\d{3})+\.)/g, (a, b) => {
    return b + ','
  })
}
console.log(shift(numm));
