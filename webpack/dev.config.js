const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

const editor = merge(common, {
  entry: './blocks/index.js',
  output: {
    path: path.resolve(__dirname, '../assets/js'),
    filename: 'editor.blocks.js',
    publicPath: '../'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/blocks.editor.css'
    })
  ]
})

const frontend = merge(common, {
  entry: './blocks/frontend.js',
  output: {
    path: path.resolve(__dirname, '../assets/js'),
    filename: 'frontend.blocks.js',
    publicPath: '../'
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/blocks.style.css'
    })
  ]
})

module.exports = [editor, frontend]
