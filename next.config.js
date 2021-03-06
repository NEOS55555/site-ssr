const path = require('path')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css');
const withPlugins = require("next-compose-plugins");
const { override, adjustStyleLoaders, addWebpackAlias } = require("customize-cra");

module.exports = withPlugins([withSass,withCss], {
  webpack: override(addWebpackAlias({
    '@': path.resolve('src'),
  })),
  /*publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/img',
  },*/
  env: {
  	API_HOST: 'http://127.0.0.1',
    PORT: process.env.NODE_ENV !== 'production' ? 5555 : 80,
    IMG_PORT: 1234
  },
  useFileSystemPublicRoutes: false,
});