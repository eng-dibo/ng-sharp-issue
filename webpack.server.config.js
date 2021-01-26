const nodeExternals = require("webpack-node-externals");

module.exports = (config, options) => {
  config = {
    mode: "development",
    resolve: config.resolve,
    entry: {
      main: ["./server.ts"]
    },
    target: "node",
    stats: { colors: false },
    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader" },
        {
          test: /\.node$/,
          loader: "node-loader",
          options: { name: "[name]-[contenthash].[ext]" }
        }
      ]
    },
    externals: [nodeExternals()]
  };

  console.log(config);
  return config;
};
