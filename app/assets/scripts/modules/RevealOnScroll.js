import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
  constructor(els) {
    this.itemsToReveal = els;
    this.browserHeight = window.innerHeight;
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 500).bind(this);
    this.events();
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle);
    window.addEventListener('resize', debounce( () => {
      console.log('resized');
      this.browserHeight = window.innerHeight
    }, 333));
  }

  calcCaller() {
    console.log('scrolled');
    this.itemsToReveal.forEach(el => {
      if (el.isRevealed == false) {
        this.calculateIfScrolledTo(el)
      };
    });
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      console.log('calculated')
      let scrollPercent = (el.getBoundingClientRect().y / this.browseHeight) * 100;
      if (scrollPercent < 75) {
        el.classList.add('reveal-item--is-visible');
        el.isRevealed = true; 
        // More efficient to check property than whether it has a CSS class
        if (el.isLastItem) {
          window.removeEventListener('scroll', this.scrollThrottle);
        }
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach( el => {
      el.classList.add('reveal-item');
      el.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }

}

export default RevealOnScroll;