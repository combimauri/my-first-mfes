const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe",

  exposes: {
    "./FeatureOneModule": "./src/app/feature-one/feature-one.module.ts",
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
