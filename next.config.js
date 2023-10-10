module.exports = {
  // Webpack 5 - Automatic Node.js Polyfills Removed: 
  // https://github.com/webpack/changelog-v5#automatic-nodejs-polyfills-removed
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
      process: false,
      net: false,
      tls: false
    };
    return config;
  },
};