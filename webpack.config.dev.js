/**
 * webpack 开发环境配置
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
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    port: 1024,
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  // module: {
  //   rules: [{
  //     enforce: 'pre',
  //     test: /\.js$/,
  //     exclude: [/node_modules/, /dist/],
  //     use: 'eslint-loader'
  //   }, {
  //     test: /\.less$/,
  //     use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  //   }, {
  //     test: /\.(png|jpg|gif)$/,
  //     use: 'file-loader'
  //   }, {
  //     test: /\.(png|jpg|gif)$/,
  //     use: [{
  //       loader: 'url-loader',
  //       options: {
  //         limit: 10000
  //       }
  //     }]
  //   }, {
  //     test: /\.html$/,
  //     use: [{
  //       loader: 'html-loader',
  //       options: {}
  //     }]
  //   }]
  // },
}
