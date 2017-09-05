var rsp = require('remove-svg-properties')

rsp.remove({
  src: './src/assets/icons/*.svg',
  out: './src/assets/icons',
  stylesheets: true,
  properties: [
    rsp.PROPS_FILL[0],
    rsp.PROPS_STROKE[0],
    rsp.PROPS_FONT,
    'color'
  ],
  namespaces: ['i', 'sketch', 'inkscape']
})
