module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    // config.module.rules[0].use[0].options.plugins.push(
    //   require.resolve("babel-plugin-remove-graphql-queries")
    // )

    // Official Gatsby recommended solution above wsa not viable, and solution leveraged via:
    // https://github.com/storybookjs/frontpage/issues/43#issuecomment-948302915Storybook config
    config.module.rules[0].use[0].options.plugins.push([require.resolve('babel-plugin-remove-graphql-queries'), {
      stage: config.mode === `development` ? 'develop-html' : 'build-html', staticQueryDir: './page-data/sq/d'
    }])
    return config
  },
}