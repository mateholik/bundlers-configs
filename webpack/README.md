# WEBPACK

## Generate JSON

```
npm init -y
```

## Install webpack

```
npm i -D webpack webpack-cli
```

Add external libs if you want

## Add starter src/js

## Create config, add command

```
"build": "webpack"

touch webpack.config.js


const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    bundle: path.resolve(__dirname, "src/js/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name][contenthash].js",
    clean: true,
  },
};
```

after bundling we can cee hashed bundle

## LOADERS, add scss support. install loader ===

create src/scss/main.scss, import it to index.js

```
npm i -D sass style-loader css-loader sass-loader
```

set loader

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

## ADD images loader ===

add src/img/laughing to main.js
no need to install loader, webpack has it

```
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
},
```

to keep file name, add to output

```
assetModuleFilename: '[name][ext]'
```

# Add plugins.

```
npm i -D html-webpack-plugin

const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
    new HtmlWebpackPlugin({
        title: "Webpack tutorial",
        filename: "index.html",
        template: "src/template.html",
    }),
  ],
```

add src/template.html

## Add babel loader ===

```
npm i -D babel-loader @babel/core @babel/preset-env

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

## lets install axios ===

```
npm i axios
```

## Add dev server

```
 "dev": "webpack serve"

npm install -D webpack-dev-server

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
