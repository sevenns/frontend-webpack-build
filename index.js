import $ from 'jquery'
import svg4everybody from 'svg4everybody'
import Main from './src/scripts/Main'
import './src/sass/styles.sass'
requireAll(require.context('./src/pug/', false, /\w\.pug$/))

$(document).ready(function () {
  svg4everybody()
  new Main().pageLoaded()
})

$(window).scroll(function () {
  new Main().pageScrolled()
})

$(window).resize(function () {
  new Main().pageResized()
})

$(window).on('load', function () {
  new Main().pageLoading()
})

function requireAll (r) {
  r.keys().forEach(r)
}
