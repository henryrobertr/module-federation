/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    nextjsLatest: `nextjsLatest@http://localhost:3013/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // Object.assign(config.experiments, { topLevelAwait: true });
    // if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'nextjsLatestHost',
          filename: 'static/chunks/remoteEntry.js',
          remotes: remotes(options.isServer),
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