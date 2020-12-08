const path = require('path');
const webpack = require('webpack');
const custom = require('../webpack.config.js');
const webpackRules = require("../webpackRules");

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {

    return {
      ...config,
      resolve: custom.resolve,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...webpackRules],
      },
    };
  }
}