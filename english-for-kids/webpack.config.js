/* eslint-disable no-undef */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  const config = {
    mode: isProduction ? "production" : "development",

    watch: !isProduction,
    entry: ["./src/index.ts", "./src/sass/main.scss"],
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "script.js",
    },

    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: "babel-loader",
        //     options: {
        //       presets: ["@babel/preset-env"],
        //     },
        //   },
        // },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
          type: "asset/resource",
        },
        {
          test: /\.html$/,
          loader: "html-loader",
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "./src/assets/"),
            to: path.resolve(__dirname, "./dist/assets"),
          },
        ],
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
