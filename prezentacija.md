pristatymas

Niekas nenaudoja tiesiog html css ir js => sass, vue, ts + 3party dependencies.
3rd prty daznai parasyti and comon js, kuris neveiks and es module syntax
Minifajina, uglifajina, bundlina, treeshakina, skirtingos versijos i kirtingus browserius, polifilai

WEBPACK====
Sukuria dependenciu lista ir trackina, kokius libus naudojam, kukius dependencius tie libai naudoja ir. Tada viska suklijuoja i viena bundla

Webpacko coras out of the box turi daug funkcionalumo, kuri galim praplesti naudodami loaderius(babel-loader, css-loader, vue-loader, img) ir pluginus(minimizuoja, optimizuoja, kuria serverius, handlina html ir tt)
labai customizible, galima prisitaikyti prie betkokio projekto.
Populiarus nes labai customizible, bet daug kas prie jo nesiliecia, nes jis gan complex

https://survivejs.com/538c4af0d21e375d6d252d38cbb8a993.png
https://webpack.js.org/

ROLLUP====
reiktu nudoti ES6 ir ivska rasyt moduliais
Pasiema visus modulius ir subundlin i viena faila
Turi treeshaking galimybe, kuri isema nenaudojamas funkcijas is moduliu
Vienu metu gali generuoti skirtingus js formatus (cjs, es, umd)
lengvesni konfigai nei webpacke

uses tree shaking, f.e if module has 10 functions, but you only use 1, rollup only imports the code that you actually using. much smaller files to load

PARCEL====
labai simple, galima leist be jokiu konfigu, nereikia gaisti laiko skaitant dokumentacija ir bandant padaryti kad dalykai veiktu daug paprastesnis nei webpackas ar rollupas
includina dev serveri, hot reload out of the box
parasytas ant RUST, 10-20x greitesnis uz webpacka ir rolupa

Parcel's JavaScript compiler is built on SWC, which handles transpiling JavaScript, JSX, and TypeScript. On top of SWC, Parcel implements dependency collection, bundling, scope hoisting, tree shaking, Node emulation, hot reloading, and more.
