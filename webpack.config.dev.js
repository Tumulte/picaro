var path = require("path");

module.exports = {
    devtool: "inline-source-map",
    mode: "development",
    entry: {
        appIndex: path.resolve(__dirname, "App/Static/styleConfigurator.js")
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, "App/Dist"),
        filename: "bundle.js"
    },
    plugins: [],
    module: {
        rules: []
    }
};