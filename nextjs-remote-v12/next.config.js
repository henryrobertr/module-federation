/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // const { webpack } = options;
    console.log(options.webpack.version);
    Object.assign(config.experiments, { topLevelAwait: true });
    // if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'nextjsV12',
          remotes: {
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './cart': './Components/Cart.tsx'
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
