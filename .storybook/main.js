const webpackRules = require("../webpackRules");

module.exports = {
  "stories": ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    }
  ],
  webpackFinal: async (config, { configType }) => {

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...webpackRules],
      },
    };
  }
}