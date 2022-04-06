import css from "rollup-plugin-css-only";
export default [
  {
    input: "src/main.js",
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
    plugins: [css({ output: "bundle.css" })],
  },
  {
    input: "src/main.js",
    output: [
      {
        dir: "dist",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [css({ output: "bundle.css" })],
  },
];
