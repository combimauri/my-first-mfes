const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: "http://localhost:3000/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "shared-library": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "0.0.1",
    },
  },
});
