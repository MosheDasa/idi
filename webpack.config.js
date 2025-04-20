const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env) => {
  const app = env.app || "disk";
  const isDevelopment = process.env.NODE_ENV !== "development";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      main: `./apps/${app}/src/main.ts`,
      renderer: `./apps/${app}/src/renderer.tsx`,
    },
    target: "electron-renderer",
    devtool: isDevelopment ? "source-map" : false,
    output: {
      path: path.resolve(__dirname, `apps/${app}/dist`),
      filename: "[name].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `./apps/${app}/src/index.html`,
        filename: "index.html",
        chunks: ["renderer"],
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isDevelopment ? "development" : "production"
        ),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, `apps/${app}/dist`),
      },
      port: app === "disk" ? 3000 : 3001,
      hot: true,
    },
  };
};
