//TODO Créer un "common"

import path from "path";
import webpack from "webpack";

import fibers from "fibers";
import sass from "sass";
import VueLoaderPlugin from "vue-loader/lib/plugin";

/**
 * @type {import('webpack').Configuration}
 * */
const myWebpackConfig = {
    devtool: "inline-source-map",
    mode: "development",
    entry: {
        appDemo: [
            path.resolve(__dirname, "static/demo/main.js"),
            path.resolve(__dirname, "App/Static/main.js")
        ],
        appBlog: [
            path.resolve(__dirname, "static/demo/main.js"),
            path.resolve(__dirname, "App/Static/main.js")
        ]
    },
    devServer: {
        publicPath: "/static/",
        contentBase: path.join(__dirname, "App/Dist"),
        overlay: true,
        hot: true,

        stats: {
            colors: true
        }
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
            vue: "vue/dist/vue.js"
        }
    }
};
module.exports = myWebpackConfig;
