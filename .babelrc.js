module.exports = api => {
  api.cache.forever()
  return {
    overrides: [
      {
        test: '**/*.steph.js',
        plugins: [[require('steph-js').plugin, {ramdaImport: 'node'}]]
      }
    ]
  }
}
