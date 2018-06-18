import $ from 'weery'

export default class Preloader {
  constructor ({
    init = false,
    el = '.preloader',
    delay = 500
  } = {}) {
    this._el = $(el)
    this._delay = delay

    if (init) {
      this.init()
    }
  }

  init () {
    setTimeout(() => {
      this._el.addClass('a-preloader-hide')
      this._el.on('animationend', () => this._el.remove())
    }, this._delay)
  }

  remove () {
    this._el.remove()
  }
}
