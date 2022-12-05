// There was a bunch of config in here before I deleted it.
// It works as is and this is JUST A DEMO NOT A PROD APP JEEZ ANDRIC!
module.exports = {
  /**
   * Experimental feature for allowing importing Typescript files outside
   * of the root directory
   * @see https://github.com/vercel/next.js/pull/22867
   */
  // experimental: {
  //   externalDir: true,
  // },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.content|\.my-file|\.ya?ml$/i,
      loader: 'raw-loader',
    });

    // return updateNextLessThan12Config(config);
    return config;
  },
};
