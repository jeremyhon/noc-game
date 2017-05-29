const path = require("path");
const webpack = require("webpack");
process.traceDeprecation = true;
module.exports = {
  context: __dirname + "/src",
  entry: [
    "react-hot-loader/patch",
    // activate HMR for React

    "webpack-dev-server/client?http://localhost:8080",
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    "webpack/hot/only-dev-server",
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    "./index.jsx"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
    inline: true,
    port: 3001,
    publicPath: "/assets/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          failOnWarning: false,
          failOnError: false
        },
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.scss$/,
          /\.css$/,
          /\.json$/,
          /\.svg$/
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['latest', 'stage-0', 'react'],
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "url" loader exclusion list.
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
};
