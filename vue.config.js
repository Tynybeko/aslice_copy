// const webpack = require("webpack");
const { gitDescribeSync } = require("git-describe");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

try {
  const gitInfo = gitDescribeSync();
  process.env.VUE_APP_GIT_HASH = gitInfo.hash;
  // eslint-disable-next-line no-empty
} catch {}

const target = process.env.VUE_APP_BASE_API;

if (process.env.NODE_ENV === "development") {
  // Use proxy when using webpack dev server
  process.env.VUE_APP_BASE_API = "";
  process.env.VUE_APP_S3_URL = "/s3/";
}

module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target
      },
      "/socket.io": {
        target
      },
      "/s3": {
        target
      }
    }
  },
  productionSourceMap: true,
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      sentryWebpackPlugin({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        release: {
          name: process.env.VUE_APP_GIT_HASH,
          setCommits: {
            auto: true,
            ignoreMissing: true,
            ignoreEmpty: true
          }
        }
      })
    ]
  }
};
