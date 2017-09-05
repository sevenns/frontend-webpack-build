import Preloader from './Preloader'
import OPTS from './_settings.js'

export default class Main {
  constructor () {
    this._preloader = new Preloader(false, OPTS.preloader.el)
  }

  pageLoaded (width, height, scrollTop) {
    console.log(
      `
        Page state: loaded
        Width: ${width}
        Height: ${height}
        ScrollTop: ${scrollTop}
      `
    )
  }

  pageScrolling (width, height, scrollTop) {
    console.log(
      `
        Page state: scrolling
        Width: ${width}
        Height: ${height}
        ScrollTop: ${scrollTop}
      `
    )
  }

  pageResized (width, height, scrollTop) {
    console.log(
      `
        Page state: resized
        Width: ${width}
        Height: ${height}
        ScrollTop: ${scrollTop}
      `
    )
  }

  pageLoading (width, height, scrollTop) {
    console.log(
      `
        Page state: loading
        Width: ${width}
        Height: ${height}
        ScrollTop: ${scrollTop}
      `
    )

    this.preloaderController()
  }

  preloaderController () {
    if (OPTS.preloader.enable) {
      this._preloader.init()
    } else {
      this._preloader.remove()
    }
  }
}
