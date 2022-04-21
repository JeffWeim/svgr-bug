// const { merge } = require("webpack-merge");
const { mergeWithRules } = require("webpack-merge");

const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "jeffweim",
    projectName: "svgr-bug",
    webpackConfigEnv,
    argv,
  });

  // return merge(defaultConfig, {
  //   // modify the webpack config however you'd like to by adding to this object
  // });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.svg$/i,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                typescript: true,
              },
            },
          ],
        },
      ],
    },
  });
};
