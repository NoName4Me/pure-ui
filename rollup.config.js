import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
const externalPkgs = Object.keys(pkg.peerDependencies);

export default [
  {
    external: [...externalPkgs],
    input: 'src/index.ts',
    output: [
      {
        file: `dist/${pkg.main}`,
        format: 'cjs'
      },
      {
        file: `dist/${pkg.module}`,
        format: 'es' // the preferred format
      },
      {
        file: `dist/${pkg.browser}`,
        format: 'iife',
        name: 'PureUI' // the global which can be used in a browser
      }
    ],
    plugins: [scss(), typescript(), terser()]
  }
];
