# WEBPACK

## Generate JSON

```
npm init -y
```

## Install webpack

```
npm i -D webpack webpack-cli
```

## - Add external libs if you want

## Create config, add command

```
  "build": "webpack"
```

touch webpack.config.js

```
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};
```

## LOADERS, add scss support. install loader

```
npm i -D sass style-loader css-loader sass-loader
```

import main.scss to index.js

## Set loaders

```
module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
```

# Add plugins.

```
npm i -D html-webpack-plugin
```

import it to config

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

configure

```
plugins: [
    new HtmlWebpackPlugin({
        title: "Webpack tutorial",
        filename: "index.html",
        template: "src/template.html",
    }),
  ],
```

## Add file caching

```
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
  },
```

## Add dev server

```
 "dev": "webpack serve"
 npm install -D webpack-dev-server
```

configure it

```
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 420,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
```

## Add babel loader

```
npm i -D babel-loader @babel/core @babel/preset-env
```

```
{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
```

## add images loader

no need to install loader, webpack has it

```
{
    test: /\.(png| svg| jpg| jpeg| gif)$/i,
    type: "asset/resource",
},
```

to keep file name:

```
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
```

## lets install axios

```
npm i axios
```
