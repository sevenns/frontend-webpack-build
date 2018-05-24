import Preloader from './Preloader'

export default class Main {
  constructor () {
    this._preloader = new Preloader({ el: '.preloader' })
  }

  loaded ({ w, h, scroll }) {
    console.log(
      `
        Page state: loaded
        Width: ${w}
        Height: ${h}
        ScrollTop: ${scroll}
      `
    )
  }

  scrolled ({ w, h, scroll }) {
    console.log(
      `
        Page state: scrolled
        Width: ${w}
        Height: ${h}
        ScrollTop: ${scroll}
      `
    )
  }

  resized ({ w, h, scroll }) {
    console.log(
      `
        Page state: resized
        Width: ${w}
        Height: ${h}
        ScrollTop: ${scroll}
      `
    )
  }

  beforeLoaded ({ w, h, scroll }) {
    console.log(
      `
        Page state: beforeLoaded
        Width: ${w}
        Height: ${h}
        ScrollTop: ${scroll}
      `
    )

    this._preloader.init()
  }
}
