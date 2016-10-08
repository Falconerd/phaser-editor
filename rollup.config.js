import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/main.js',
  dest: 'build/bundle.js',
  format: 'iife',
  sourceMap: 'inline',
  moduleName: 'phaserEditor',
  globals: {
    events: 'events'
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    eslint({
      exclude: [
      ]
    })
  ]
};
