import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";
import serve from "rollup-plugin-serve";

export default [
  {
    input: "src/js/main.js",
    output: [
      {
        file: "build/bundle-cjs.js",
        format: "cjs",
        inlineDynamicImports: true,
      },
      {
        file: "build/bundle-umd.js",
        format: "umd",
        inlineDynamicImports: true,
      },

      {
        file: "build/bundle-es.js",
        format: "es",
        inlineDynamicImports: true,
        // sourcemap: true,
      },
    ],
    plugins: [
      scss({ output: "build/style.css" }),
      image(),
      serve({ open: true }),
    ],
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
