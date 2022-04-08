pristatymas

Niekas nenaudoja tiesiog html css ir js => sass, vue, ts + 3party dependencies.
daug problemu kai viska sujngiam:
3rd prty daznai parasyti and comon js, kuris neveiks su es module syntax
Minifajina, uglifajina, treeshakina, skirtingos versijos i kirtingus browserius, polifilai

BUndleriai tai ir daro

Per pristatyma pasetupinsiu mini projektuka su js, scss ir .svg failais and skirtingu bundleriu

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

naudoja SWC (Speedy Web Compiler ) - super-fast TypeScript / JavaScript compiler written in Rust, 10-20x greitesnis uz webpacka ir rolupa

On top of SWC, Parcel implements dependency collection, bundling, scope hoisting, tree shaking, , hot reloading, dev serva ir tt.

SNOWPACK===
next generaition development toolsas, naudoja esbuild kuris parasytas ant GO ir yra 10-100x greitesnis uz kitus bundlerius.
suportinaes6 and CommonJS modules, treeshakinga, browseris cachina es modulsus, todel nereikia jam is naujo siusti failu. galima pidet kruva pluginu

Vietoj to kad bundlint modules ir servint bundla i browseri, Snowpacko dev servas servina ne bundla, o native modules, kuriuos nuo 2018 metu supranta betkuris modern browseris. Tokiu principu snowpackui nereikia liesti visu modules jei kazka pakeiti kode, tik paupdatintas modules bus perbuildintas. Projekto greitis nebepriklauso nuo projekto dydzio, visada pastovus, kai kitose bundleriuose - kuo didesnis projektas, tuo ilgiau compilina koda

Kadangi naujas, pluginu dar ne tiek daug palyginus su webpacku, kuris virst 10 metu egzistuoja

Pagrinde naudojamas developmentui, productionui reikia bundlerio, nes out of the box nebundlina. tai bus du configai

APIBENDRINIMAS===
JEI darom paprasta nedideli appsa ir norim iskart pradet kodint, bei norim kad uz mus suhandlintu visus settingsus - PARCEL
JEI darom library ar didesni appsa su nedideliu kiekiu third party importu - ROLLUP
JEI darom huge appsa su daug 3rd party integrationu, bei norit smulkiai kontroliuot bundlinima - WEBPACK

VITE===
js build tool
servina developinimui ir bundlina koda
uzkrauna ES modules ziauriai greitai, nepriklausomai kokio dydzio appsas
suportina Hot module replacement, pakeitus faila, jo state pasilieka
kai buildina productionui, naudoja rollup
naudoja esbuild kodo transpailinimui
splitina koda,
