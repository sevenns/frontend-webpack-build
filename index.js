import $ from 'jquery'
import svg4everybody from 'svg4everybody'
import Main from './src/scripts/Main'
import './src/sass/styles.sass'
requireAll(require.context('./src/pug/', false, /\w\.pug$/))

$(document).ready(function () {
  svg4everybody()

  return new Main().pageLoaded(
    $(window).outerWidth(true),
    $(window).outerHeight(true),
    $(window).scrollTop()
  )
})

$(window).scroll(function () {
  return new Main().pageScrolling(
    $(window).outerWidth(true),
    $(window).outerHeight(true),
    $(window).scrollTop()
  )
})

$(window).resize(function () {
  return new Main().pageResized(
    $(window).outerWidth(true),
    $(window).outerHeight(true),
    $(window).scrollTop()
  )
})

$(window).on('load', function () {
  return new Main().pageLoading(
    $(window).outerWidth(true),
    $(window).outerHeight(true),
    $(window).scrollTop()
  )
})

function requireAll (r) {
  r.keys().forEach(r)
}
