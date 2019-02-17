const config = require('./rollup.config')
const babel = require('rollup-plugin-babel')

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    babel({
      exclude: 'node_modules/**',
      env: {
        test: {
          plugins: [
            [
              'istanbul',
              {
                exclude: [
                  '**/*.spec.js'
                ]
              }
            ]
          ]
        }
      },
      presets: [
        ['@babel/env',
          {
            useBuiltIns: 'usage',
            modules: false,
            targets: {
              'ie': 11
            }
          }]]
    })
  ]
}