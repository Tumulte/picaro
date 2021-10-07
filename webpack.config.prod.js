const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");

const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const myWebpackConfig = merge(commonConfig, {
  mode: "production",
  entry: {
    appDemo: [
      path.resolve(__dirname, "static/demo/main.js"),
      path.resolve(__dirname, "App/Static/main.js")
    ]
  },
  output: {
    path: path.resolve(__dirname, "App/Dist"),
    filename: "[name]-bundle.js"
  },
  plugins: [
    new miniCssExtractPlugin(),
    new optimizeCssAssetsPlugin(),
    new webpack.DefinePlugin({ ENVIRONMENT: JSON.stringify("production") }),
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => {
        let scripts = "";
        for (let item of htmlWebpackPlugin.tags.headTags) {
          scripts += `script(src="${item.attributes.src}" defer)`;
          scripts += "\n";
        }
        return scripts;
      },
      inject: false,
      minify: false,
      filename: path.resolve(__dirname, "App/Views/webpackBundles.pug")
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.min",
      "@components": path.resolve(__dirname, "App/Ui/Components"),
      "@store": path.resolve(__dirname, "App/Store")
    },
    extensions: [".js", ".vue", ".json"]
  }
});
module.exports = myWebpackConfig;
