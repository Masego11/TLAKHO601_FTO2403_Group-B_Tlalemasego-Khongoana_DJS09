const path = require("path");
module.exports = {
  "mode": "development",
  "entry": "./index.ts",
  "output": {
    "filename": "index.pack.js",
    "path": path.resolve(__dirname, "dist")
  },
  "resolve": {
    "extensions": [
      ".ts",
      ".js",
      ".json"
    ]
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "ts-loader"
        },
        "exclude": /node_modules/,
        "test": /\.ts$/
      }
    ]
  }
};