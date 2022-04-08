# SNOWPACK

## create package.json

```
npm init -y
```

## install snowpack

```
npm install --save-dev snowpack
```

## create JS files

add src folder from src-starter. dont forget to RENAME it to src
add index.html to root, it will be as entry point

## Add scripts

```
  "start": "snowpack dev",
  "build": "snowpack build"
```

## add plugins (scss) ===

copy src/scss/main.scss to src and add to main.js

```
touch snowpack.config.mjs

npm i -D @snowpack/plugin-sass

export default {
  plugins: ["@snowpack/plugin-sass"],
};


```

## Add img support ===

create src/img/laughing.svg and IMPORT to main.js
ships with buid in images support

## show

open network tag and see, that not bundled modules are loaded,
jei parefreshinam, tai 301, jei pakeiciam module, tai tik jis apsirefreshina
