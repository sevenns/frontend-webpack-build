import $ from 'jquery'
import svg4everybody from 'svg4everybody'
import Main from './src/classes/Main'
import './src/styles/index.sass'

const main = new Main()

requireAll(require.context('./src/pug/', false, /\w\.pug$/))

$(document).ready(() => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  }

  svg4everybody()

  return main.loaded ? main.loaded(data) : null
})

$(window).scroll(() => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  }

  return main.scrolled ? main.scrolled(data) : null
})

$(window).resize(() => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  }

  return main.resized ? main.resized(data) : null
})

$(window).on('load', () => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  }

  return main.beforeLoaded ? main.beforeLoaded(data) : null
})

function requireAll (r) {
  r.keys().forEach(r)
}
