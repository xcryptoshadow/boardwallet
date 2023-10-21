const { i18n } = require("./next-i18next.config");

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  i18n,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/protection",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
