# ROLLUP

## create package.json

```
npm init -y
```

## install rollup

```
npm i -D rollup
```

## create JS files

add src folder from src-starter. dont forget to RENAME itto src

## create config

```
"start": "rollup --config",
touch rollup.config.js
```

## add settings

```
export default {
  input: "src/js/main.js",
  output: {
    file: "build/bundle-cjs.js",
    format: "cjs",
  },
};

```

npm run start and you will see good tree shaking example

## add settings MORE FORMATS ===

```
 output: [
    {
        file: "build/bundle-cjs.js",
        format: "cjs",
      },
      {
        file: "build/bundle-umd.js",
        format: "umd",
      },
      {
        file: "build/bundle-es.js",
        format: "es",
        // sourcemap: true,
      },
    ],
```

## enable watching --watch

## Chunk code with dynamic imports ===

update main.js and outputs

```
module.exports = function () {
  import("./greetingsHelper").then(({ sayHelloTo }) =>
    console.log(sayHelloTo("Rokas"))
  );
};

inlineDynamicImports: true,
```

add another config, export not object but array of objects

```
{
    input: "src/js/main.js",
    output: [
      {
        dir: "chunks",
        format: "es",
      },
    ],
  },
```

## add plugins (scss) ===

create src/scss/main.scss and IMPORT to main.js

rollup understand only js files.

```
npm install --save-dev rollup-plugin-scss@2

import scss from 'rollup-plugin-scss'

plugins: [scss({ output: "build/style.css" })],
```

## Add img support ===

create src/img/laughing.svg and IMPORT to main.js

```
import laughing from "./../img/laughing.svg";
const laughtImg = document.getElementById("laughtImg");
laughtImg.src = laughing;

npm i -D @rollup/plugin-image
import image from "@rollup/plugin-image";
 plugins: [scss({ output: "build/style.css" }), image()],
```

## Add server ===

```
npm i -D rollup-plugin-serve
import serve from "rollup-plugin-serve";
plugins: [
    scss({ output: "build/style.css" }),
    image(),
    serve({ open: true }),
  ],
```

```

```
