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
          name: 'nextjsV12Host',
          remotes: {
            nextjsV12: `nextjsV12@http://localhost:3012/_next/static/chunks/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
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