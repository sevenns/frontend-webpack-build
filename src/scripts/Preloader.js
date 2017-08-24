import $ from 'jquery'

export default class Preloader {
  constructor (el, animDuration) {
    this._el = $(el)
    this._animDuration = animDuration
    this._DELAY = 500

    this._init()
  }

  _init () {
    this._el.delay(this._DELAY).fadeOut(this._animDuration)

    setTimeout(() => {
      this._el.remove()
    }, this._DELAY + this._animDuration)
  }
}
