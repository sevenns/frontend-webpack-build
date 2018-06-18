import Preloader from './Preloader'

export default class Main {
  constructor () {
    this._preloader = new Preloader({ el: '.preloader' })
  }

  loaded ({ w, h, scroll }) {
    console.log(`
      ~SCROLLED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)
  }

  scrolled ({ w, h, scroll }) {
    console.log(`
      ~SCROLLED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)
  }

  resized ({ w, h, scroll }) {
    console.log(`
      ~RESIZED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)
  }

  beforeLoaded ({ w, h, scroll }) {
    console.log(`
      ~BEFORELOADED~
      Width: ${w}
      Height: ${h}
      Scroll: ${scroll}
    `)

    this._preloader.init()
  }
}
