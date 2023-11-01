module.exports = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
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
    localeDetection: false,
    defaultLocale: "en",
    domains: [
      {
        domain: "www.mattjewell.co.uk",
        defaultLocale: "en",
      },
      {
        domain: "www.mattjewell.de",
        defaultLocale: "de",
      },
    ],
  },
};
