require('es6-promise').polyfill(); //To avoid "ReferenceError: Promise is not defined" on NodeJS versions < 0.12
var webpack = require('webpack');
var rootDir = process.cwd();

module.exports = {
  progress: false,
  plugins: [
    /* Providing jquery as a plugin leads to problems with libraries that try to extend the jquery object
     new webpack.ProvidePlugin({
       jQuery: "jquery/dist/jquery",
       $: "jquery/dist/jquery",
       'window.jQuery': "jquery/dist/jquery"
     })
     */
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      jQuery: "jquery/dist/jquery" //materialize.js needs this
    }
  },
  module: {
    unsafeCache: true,
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.pug/,
        loader: "pug-ng-html-loader"
      },
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style!css"
      },
      {
        test: /\.useable\.css$/,
        loader: "style/useable!css"
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?paths=node_modules/bootstrap-styl/bootstrap/'
      },
      {
        test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "url-loader"
      }
    ]
  }
};