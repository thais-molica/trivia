// eslint-disable-next-line no-undef
module.exports = {
    devIndicators: {
      autoPrerender: false,
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['url-loader'],
      });
      return config;
    },
  }