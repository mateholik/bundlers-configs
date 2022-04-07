import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";

export default [
  {
    input: "src/js/main.js",
    output: [
      {
        file: "build/bundle-umd.js",
        format: "umd",
        // sourcemap: true,
        inlineDynamicImports: true,
      },
      {
        file: "build/bundle-es.js",
        format: "es",
        inlineDynamicImports: true,
        // sourcemap: true,
      },
    ],

    plugins: [scss({ output: "build/style.css" }), image()],
  },
  {
    input: "src/js/main.js",
    output: [
      {
        dir: "chunks",
        format: "es",
        // sourcemap: true,
      },
    ],
    plugins: [scss({ output: "build/style.css" }), image()],
  },
];
