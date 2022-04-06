import css from "rollup-plugin-css-only";
import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "build/bundle-cjs.js",
        format: "cjs",
        sourcemap: true,
        inlineDynamicImports: true,
      },
      {
        file: "build/bundle-es.js",
        format: "es",
        inlineDynamicImports: true,
        sourcemap: true,
      },
    ],
    plugins: [css({ output: "build/bundle.css" }), scss(), image()],
  },
  {
    input: "src/index.js",
    output: [
      {
        dir: "dist",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [css({ output: "build/bundle.css" }), scss(), image()],
  },
];
