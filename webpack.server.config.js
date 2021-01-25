module.exports = (config, options) => {
  config.module = config.module || {};
  config.module.rules = config.module.rules || [];
  config.module.rules.push({
    test: /\.node$/,
    loader: "node-loader",
    options: { name: "[name]-[contenthash].[ext]" }
  });

  console.log(config);
  return config;
};
