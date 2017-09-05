import $ from 'jquery'
import OPTS from './_settings.js'

export default class Preloader {
  constructor (
    init = false,
    el,
    animDuration = OPTS.base.animDuration,
    delay = OPTS.preloader.delay
  ) {
    this._el = $(el)
    this._animDuration = animDuration
    this._delay = delay

    if (init) {
      this.init()
    }
  }

  init () {
    this._el.delay(this._delay).fadeOut(this._animDuration)

    setTimeout(() => {
      this._el.remove()
    }, this._delay + this._animDuration)
  }

  remove () {
    this._el.remove()
  }
}
