https://github.com/scps960740

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


