class ObserveOnScroll {
  constructor(els, obsThreshold, ) {
    this.itemsToReveal = els;
    this.obsThreshold = obsThreshold;
    this.hideInitially();
    this.sectionObserver = new IntersectionObserver(this.revealSection, {
      root: null,
      threshold: this.obsThreshold
    });
    this.events();

  }

  events() {
    this.itemsToReveal.forEach(el => {
      this.sectionObserver.observe(el)
    });
  }

  revealSection(entries, observer) {
    const [entry] = entries;
    entry.target.classList.add('reveal-item--is-visible');
    observer.unobserve(entry.target);
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add('reveal-item');
    });
  }
}

export default ObserveOnScroll;