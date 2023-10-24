const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { 
        test: /\.css$/,
        include: [path.resolve(__dirname, './css')],
        use: 'css-loader'
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        include: [path.resolve(__dirname, './assets')],
        use: [{
          loader: "url-loader",
          options: {
            limit: 500000,
          }
        }],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Task 2",
    }),
  ],
};
