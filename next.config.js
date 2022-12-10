const withOffline = require("next-offline");

const nextConfig = {
  images: {
    domains: ["rb.gy"],
  },
};

module.exports = withOffline(nextConfig);
