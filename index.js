import $ from 'jquery';
import Main from '~client/classes/Main';
import '~client/styles/index.sass';
// import '~views/index.pug';

// if (process.env.NODE_ENV === 'production') {
//   requireAll(require.context('~client/views', false, /\w\.pug$/));
// }

const main = new Main();

$(document).ready(() => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  };

  return main.loaded ? main.loaded(data) : null;
});

$(window).scroll(() => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  };

  return main.scrolled ? main.scrolled(data) : null;
});

$(window).resize(() => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  };

  return main.resized ? main.resized(data) : null;
});

$(window).on('load', () => {
  const data = {
    w: $(window).outerWidth(true),
    h: $(window).outerHeight(true),
    scroll: $(window).scrollTop()
  };

  return main.beforeLoaded ? main.beforeLoaded(data) : null;
});

// function requireAll (r) {
//   r.keys().forEach(r);
// }
