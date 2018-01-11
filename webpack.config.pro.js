/**
 * webpack 生产环境配置
 */
module.exports = {
  // 入口文件 让webpack用哪个文件作为项目的入口
  entry:  __dirname + "/app/main.js",  //__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  // 出口 让webpack把处理完成的文件放在哪里
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
    // path: path.resolve(__dirname, 'public')

  },
}
