//TODO BACKGROUND create a "common"

const path = require("path");
const webpack = require("webpack");

const fibers = require("fibers");
const sass = require("sass");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const myWebpackConfig = {
    target: "web",
    devtool: "inline-source-map",
    mode: "development",
    entry: {
        client: path.resolve(__dirname, "App/Static/client.js"),
    },
    devServer: {
        publicPath: "localhost:3000/",
        contentBase: path.join(__dirname, "App/Dist"),
        overlay: true,
        hot: true,
        stats: {
            colors: true
        },
        proxy: {
            "/public": {
                target: "http://localhost:8080",
                pathRewrite: {"^/public": ""}
            },
            "/static": {
                target: "http://localhost:8080",
            },
            "/appapi": {
                target: "http://localhost:8080",
            },
            "/api": {
                target: "http://localhost:8080",
            },
            "/fonts": {
                target: "http://localhost:8080",
            }

        },
        port: 3000
    },
    output: {
        path: path.resolve(__dirname, "App/Dist"),
        filename: "[name]-bundle.js",
        publicPath: "/dev-bundle/"
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
                exclude: /node_modules/,
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            ENVIRONMENT: JSON.stringify("development")
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.js",
            "@components": path.resolve(__dirname, "App/Ui/Components"),
            "@store": path.resolve(__dirname, "App/Store")
        },
        extensions: [".js", ".vue", ".json"],
    }
};
module.exports = myWebpackConfig;
