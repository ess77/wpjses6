const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.scss$/,
            // loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
            use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader', 'postcss-loader'],
              }))
        }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css"),
        new DashboardPlugin()
      ],
    devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true
    },
    devtool: "eval-source-map"
}

module.exports = config;