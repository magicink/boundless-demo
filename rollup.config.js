const { babel } = require('@rollup/plugin-babel')
const { terser } = require('rollup-plugin-terser')
module.exports = [
  {
    input: 'src/index.js',
    plugins: [
      babel({
        babelHelpers: 'bundled',
        babelrc: false,
        plugins: [
          '@babel/plugin-transform-arrow-functions',
          '@babel/plugin-transform-block-scoping',
          '@babel/plugin-transform-literals',
          '@babel/plugin-transform-destructuring',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-optional-chaining'
        ],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              forceAllTransforms: true
            }
          ]
        ]
      }),
      terser()
    ],
    output: {
      dir: 'dist',
      format: 'iife'
    }
  }
]
