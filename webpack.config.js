var path = require('path');


module.exports = {

  // set the context (optional)
  context: path.join(__dirname, '/app'),
  entry: 'main',

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
      root: path.join(__dirname, '/app'),
      extensions: ['', '.ts', '.js', '.html','.less', '.css']
  },

  exclude: {
      node: path.resolve(__dirname, "node_modules")
  },

  output: {
    filename: 'coolApp.js',
    path: path.resolve('build')
  },

  module: {
    loaders: [
        // load css and process sass
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {
            test: /\.less$/,
            exclude: /(node_modules|bower_components|style-loader)/,
            loader: 'style!css!less'
        },

        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.ts$/, loader: 'ts-loader' },

        // all html files 
        { test: /\.html$/, loader: 'ngtemplate!html' }
    ]
  },

  plugins: [
  ],

  // webpack dev server configuration
  devServer: {
    contentBase: "./build",
    noInfo: false,
    inline: true
  },

  // support source maps
    devtool: "source-map",

    watch: false
};