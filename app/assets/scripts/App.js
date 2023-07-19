import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import ObserveOnScroll from './modules/ObserveOnScroll';
import StickyHeader from './modules/StickyHeader';
import NavLinkSections from './modules/NavLinkSections';

new ObserveOnScroll(document.querySelectorAll('.feature-item'), .5);
new ObserveOnScroll(document.querySelectorAll('.testimonial'), .5);
new StickyHeader();
new MobileMenu();
let navLinkSections = new NavLinkSections();

let modal;

document.querySelectorAll('.open-modal').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */'./modules/Modal').then( (x) => {
        modal = new x.default();
        setTimeout(() => modal.openTheModal(), 20);
      }).catch( () => console.log('Problem'))
    } else {
      modal.openTheModal();
    }
  })
});



if (module.hot) {
  module.hot.accept();
}