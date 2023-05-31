const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(ttc|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/fonts/",
          publicPath: "_next/static/fonts/",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
