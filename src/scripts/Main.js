import Preloader from './Preloader'

export default class Main {
  pageLoaded () {
    console.log('page loaded')
  }

  pageScrolled () {
    console.log('page scrolled')
  }

  pageResized () {
    console.log('page resized')
  }

  pageLoading () {
    console.log('page loading')
    return new Preloader('.preloader', 300)
  }
}
