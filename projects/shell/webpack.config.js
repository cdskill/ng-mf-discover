const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['shared-lib']);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        "customer": "customer@http://localhost:5005/customerEntry.js",
        "mfAlone": "mfAlone@http://localhost:8008/mfAloneEntry.js",
      },
      shared: share({
        "@angular/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/common/http": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@angular/router": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "counter-lib": {singleton: true, strictVersion: true, requiredVersion: 'auto'},
        "@ngx-translate/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
