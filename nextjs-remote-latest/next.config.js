/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // const { webpack } = options;
    // Object.assign(config.experiments, { topLevelAwait: true });
    // if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'nextjsLatest',
          remotes: {
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './ads': './src/Components/Ads.tsx',
            './users': './src/pages/users.tsx'
          },
          shared: {},
          extraOptions:{
            automaticAsyncBoundary: true
          }
        }),
      );
    // }

    return config;
  },
}

module.exports = nextConfig
