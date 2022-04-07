# ROLLUP

uses tree shaking, f.e if module has 10 functions, but you only use 1, rollup only imports the code that you actually using. much smaller files to load

ROLLUP CONFIG

## create package.json

```
npm init -y
```

## install rollup

```
npm i -D rollup
```

## create JS files

## create config

```
"start": "rollup --config",
touch rollup.config.js
```

## add settings

```
export default {
  input: "src/main.js",
  output: {
    file: "build/bundle.js",
    format: "cjs",
  },
};
```

## add settings MORE FORMATS

```
export default {
  input: "src/main.js",
  output: [
    {
      file: "build/bundle-cjs.js",
      format: "cjs",
    },
    {
      file: "build/bundle-es.js",
      format: "es",
    },
  ],
};
```

## enable watching --watch

## Chunk code with dynamix imports

"dev": "rollup src/main.js -f cjs -d dist/" <br>
inlineDynamicImports: true

```
module.exports = function () {
  import("./greetingsHelper").then(({ sayHelloTo }) =>
    console.log(sayHelloTo("Ugnius"))
  );
};
```

## add plugins (css)

create style.css and import to mian.js

rollup understand only js files.

npm i -D rollup-plugin-css-only

```
import scss from "rollup-plugin-scss";
export default {
 input: "src/main.js",
 output: [
   {
     file: "build/bundle-sjs.js",
     format: "cjs",
   },
   {
     file: "build/bundle-es.js",
     format: "es",
   },
 ],
 plugins: [scss(), image()],
};
```

https://www.youtube.com/watch?v=IdxAJaKwuxQ&list=PLukNGYD6iW6IVdS2V844TMuqKethaQ62G&index=1&ab_channel=DailyTuition

## Add sass support

```
npm install --save-dev rollup-plugin-scss@2
import scss from 'rollup-plugin-scss'
scss({ output: "build/style.css" })
```

## Add img support

```
npm i -D @rollup/plugin-image
import image from "@rollup/plugin-image";
 plugins: [scss({ output: "build/style.css" }), image()],
```

## Add server

```
npm i -D rollup-plugin-serve
import serve from "rollup-plugin-serve";
plugins: [
    scss({ output: "build/style.css" }),
    image(),
    serve({ open: true }),
  ],
```
