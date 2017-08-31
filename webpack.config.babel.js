import path from 'path'
import webpack from 'webpack'
import HtmlPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const entry = './app/app.js'

const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
}

const plugins = [
  new ExtractTextPlugin('bundle.css'),
  new HtmlPlugin({ template: 'app/app.html' }),

  new webpack.LoaderOptionsPlugin({ minimize: true }),
  new webpack.optimize.UglifyJsPlugin({ sourceMap: true, compress: { warnings: false } })
]

const loaders = {
  css: ExtractTextPlugin.extract({
    use: 'css-loader',
    fallback: 'vue-style-loader'
  })
}

const rules = [
  {
    test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
    loader: 'file-loader',
    options: { name: '[name].[ext]?[hash]' }
  },

  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },

  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: { loaders }
  },

  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: 'css-loader',
      fallback: 'style-loader'
    })
  }
]

const alias = {
  vue$: 'vue/dist/vue.common.js'
}

const devServer = {
  hot: true,
  port: 8888,
  host: '0.0.0.0',
  historyApiFallback: true
}

module.exports = {
  entry,
  output,

  plugins,
  module: { rules },
  resolve: { alias },

  devServer,
  devtool: '#eval-source-map'
}
