const presets = [
  [
    "@babel/preset-env",
    {
      targets: "> 0.25%, not dead",
      useBuiltIns: "usage",
      corejs: "3"
    },
    "es2020"
  ]
];
const plugins = ["@babel/plugin-transform-runtime"];
module.exports = { presets, plugins };
