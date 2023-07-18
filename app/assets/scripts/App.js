import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import ObserveOnScroll from './modules/ObserveOnScroll';
import StickyHeader from './modules/StickyHeader';
import NavLinkSections from './modules/NavLinkSections';

new ObserveOnScroll(document.querySelectorAll('.feature-item'), .5);
new ObserveOnScroll(document.querySelectorAll('.testimonial'), .5);

let stickyHeader = new StickyHeader();

let mobileMenu = new MobileMenu();

let navLinkSections = new NavLinkSections();


if (module.hot) {
  module.hot.accept();
}
