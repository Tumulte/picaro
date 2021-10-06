const path = require("path");
const sass = require("sass");
const fibers = require("fibers");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  target: "web",
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
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "@components": path.resolve(__dirname, "App/Ui/Components"),
      "@store": path.resolve(__dirname, "App/Store")
    },
    extensions: [".js", ".vue", ".json"]
  },
  plugins: [new VueLoaderPlugin()]
};