https://github.com/scps960740

difference between react & angular
https://juejin.cn/post/6950301479412432903

框架与库
Angular是一个框架，而React是一个库


数据更新
Angular

数据更新检查：

在 Angular 中有一个 Zone.js 负责监听需要视图变化的事件触发
每一个组件都都它自己的检测器(detector)，用于负责检查其自身模板上绑定的变量。
将旧值跟新值进行比较，不相等就说明检测到变化，更新对应视图

虚拟 DOM 如何运行？

创建阶段：首先依据 JSX 和基础数据创建出来虚拟 DOM，它反映了真实的 DOM 树的结构。然后由虚拟 DOM 树创建出真实 DOM 树，真实的 DOM 树生成完后，再触发渲染流水线往屏幕输出页面。
更新阶段：如果数据发生了改变，那么就需要根据新的数据创建一个新的虚拟 DOM 树；然后 React 比较两个树，找出变化的地方，并把变化的地方一次性更新到真实的 DOM 树上；最后渲染引擎更新渲染流水线，并生成新的页面。


数据绑定和数据流


组件通信

父组件向子组件通信
子组件向父组件通信
非父子组件通信



typescript is superset of javascript, static typing

typescript课程
https://www.youtube.com/watch?v=GinkGJZBHIY&t=8798s

https://mattshelley.dev/export-vs-export-default/#:~:text=If%20a%20module's%20primary%20purpose,things%20to%20export%20%5B4%5D.
export (named export) vs export default

// module.js
export const value = 123

// another-module.js
import { value } from './module'

------
// module.js
const value = 123
export default value

// another-module.js
import value from './module'


--------------------------------------------------------------
html/css
https://www.youtube.com/watch?v=-yqlP0HWP94
https://hiskio.com/en/courses/529/about?s=tcTailwind

HTML Responsive Web Design
https://www.w3schools.com/html/html_responsive.asp

Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, 
to make it look good on all devices (desktops, tablets, and phones):

Setting The Viewport
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Responsive Images
Responsive Text Size
Media Queries: Media Queries能在不同的条件下使用不同的样式，使用页面达到不同的渲染效果
  https://juejin.cn/post/6844903450078248973

Bootstrap
Another popular CSS framework is Bootstrap. Bootstrap uses HTML, CSS and jQuery to make responsive web pages
  

--------------------------------------------------------------
webpack5
https://github.com/scps960740/Webpack-crash-course-2021-bruceFE
https://www.youtube.com/watch?v=uP6KTupfyIw&list=PLxNBsYH_m6ywXdOfpVgibRbJzidecajoX&index=3
webpack的作用在于把开发的代码include typescript, react, html, js, css -> using config -> package to deploy to prod/dev

module.exports = {
  // development production
  mode: modeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[hash].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.gif/,
        type: 'asset/resource'
      }
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './base.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[hash].css'
    })
  ],
};


