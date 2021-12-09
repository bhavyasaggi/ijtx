module.exports = function (api) {
  // var isProd = process.env.NODE_ENV === 'production'
  var toCommonJS = process.env.TARGET_ENV === 'commonjs'

  api.cache(false)

  return {
    comments: false,
    presets: [
      [
        '@babel/preset-env',
        {
          modules: toCommonJS ? 'commonjs' : 'auto',
          targets: {
            esmodules: !toCommonJS,
          },
        },
      ],
      'minify',
    ],
    plugins: [],
  }
}
