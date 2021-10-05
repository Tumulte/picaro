const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");
const sass = require("sass");
const fibers = require("fibers");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const myWebpackConfig = {
  mode: "production",
  entry: {
    appDemo: [
      path.resolve(__dirname, "static/demo/main.js"),
      path.resolve(__dirname, "App/Static/main.js")
    ]
  },

  target: "web",
  output: {
    path: path.resolve(__dirname, "App/Dist"),
    filename: "[name]-bundle.js"
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to `<template lang="pug">` in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ["pug-plain-loader"]
          },
          // this applies to pug imports inside JavaScript
          {
            use: ["raw-loader", "pug-plain-loader"]
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.s([ca])ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
              sassOptions: {
                fiber: fibers,
                indentedSyntax: true // optional
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin(),
    new optimizeCssAssetsPlugin(),
    new webpack.DefinePlugin({ ENVIRONMENT: JSON.stringify("production") }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "@components": path.resolve(__dirname, "App/Ui/Components"),
      "@store": path.resolve(__dirname, "App/Store")
    },
    extensions: [".js", ".vue", ".json"]
  }
};
module.exports = myWebpackConfig;
