import path from "path";

export default {
    devtool: "inline-source-map",
    mode: 'development',
    entry: {
        appIndex: path.resolve(__dirname, "appIndex/controllers/index.js")
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [],
    module: {
        rules: [{
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};