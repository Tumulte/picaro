import path from "path";
import miniCssExtractPlugin from "mini-css-extract-plugin";
import optimizeCssAssetsPlugin from "optimize-css-assets-webpack-plugin";
import webpack from "webpack";

export default {
    mode: "production",
    entry: {
        appDemo: [path.resolve(__dirname, "static/demo/main.js"), path.resolve(__dirname, "App/Static/main.js")],
        appBlog: [path.resolve(__dirname, "static/demo/main.js"), path.resolve(__dirname, "App/Static/main.js")],
    },

    target: "web",
    output: {
        path: path.resolve(__dirname, "App/Dist"),
        filename: "[name]-bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: miniCssExtractPlugin.loader},
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: [{loader: "url-loader"}],
            },
        ],
    },
    plugins: [
        ["react-remove-properties", {"properties": ["data-test", "data-jest"]}],
        new miniCssExtractPlugin(),
        new optimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({ENVIRONMENT: JSON.stringify("production")}),
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.js",
        },
    },
};
