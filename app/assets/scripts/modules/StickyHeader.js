class StickyHeader {
  constructor() {
    this.siteHeader = document.querySelector('.site-header');
    this.navHeight = this.siteHeader.getBoundingClientRect().height;
    this.observationDeck = this.observerDiv();
    this.options = {
      root: null,
      threshold: 0
    }
    this.siteHeaderObserver = new IntersectionObserver(this.darken.bind(this), this.options);
    this.events();
  }

  events() {
    this.siteHeaderObserver.observe(this.observationDeck);
    console.log(this.navHeight);
  }

  darken(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      this.siteHeader.classList.add('site-header--dark')
    } else {
      this.siteHeader.classList.remove('site-header--dark');
    }
  }

  observerDiv() {
    const topDiv = document.createElement('div');
    topDiv.classList.add('site-header__observer');
    document.querySelector('body').prepend(topDiv);
    topDiv.style.height = `${this.navHeight}px`;
    topDiv.style.position = 'absolute';
    return topDiv;
  }

}

export default StickyHeader;