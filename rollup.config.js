import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import typescript from "@rollup/plugin-typescript";
import image from '@rollup/plugin-image'

import pkg from "./package.json";
const externalPkgs = Object.keys(pkg.peerDependencies);

const isDev = process.env.ENV === "dev";

const plugins = [image(), commonjs(), resolve(), styles(), typescript()];

!isDev && plugins.push(terser());

export default [
  {
    external: [...externalPkgs],
    input: "src/index.ts",
    output: [
      {
        file: `dist/${pkg.main}`,
        format: "cjs",
      },
      {
        file: `dist/${pkg.module}`,
        format: "es", // the preferred format
      },
      {
        file: `dist/${pkg.browser}`,
        format: "iife",
        name: "PureUI", // the global which can be used in a browser
      },
    ],
    plugins,
  },
];
