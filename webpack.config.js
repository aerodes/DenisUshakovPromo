const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const JavaScriptObfuscator = require("webpack-obfuscator");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");

module.exports = {
  entry: "./source/index.tsx",
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  output: {
    filename: "result.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "source/index.html"),
      inject: "body",
    }),
    new MiniCssExtractPlugin(),
    new JavaScriptObfuscator({
      rotateUnicodeArray: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // new HtmlMinimizerPlugin(),
      new EsbuildPlugin({
        target: "es2020",
        css: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.module\.s[ac]ss$/i, // Обработка SCSS-модулей
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i, // Обработка обычных SCSS файлов (не модулей)
        exclude: /\.module\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(ts|js)x?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [["@babel/preset-env", { targets: "defaults" }]],
      //     },
      //   },
      // },

      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              target: "es2020",
              loader: "tsx",
            },
          },
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },

  stats: {
    children: true,
  },
  cache: true,
  devServer: {
    port: 3030,
  },
};
