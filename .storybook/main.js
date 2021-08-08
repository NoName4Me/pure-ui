const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    // fix bug: https://github.com/d3/d3-zoom/issues/167
    config.resolve.alias['d3-selection'] = path.resolve(
      process.cwd(),
      './node_modules/d3-selection'
    );

    // const fileLoaderRule = config.module.rules.find(
    //   (rule) => !Array.isArray(rule.test) && rule.test.test(".svg"),
    // );
    // fileLoaderRule.exclude = /\.svg$/;
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack", "url-loader"],
    // });

    return config;
  }
};
