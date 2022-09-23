module.exports = {
  trailingSlash: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": __dirname,
    };
    return config;
  },
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
    domains: [
      {
        domain: "mattjewell.co.uk",
        defaultLocale: "en",
      },
      {
        domain: "mattjewell.de",
        defaultLocale: "de",
      },
    ],
  },
};
