import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import ObserveOnScroll from './modules/ObserveOnScroll';

new ObserveOnScroll(document.querySelectorAll('.feature-item'), .5);
new ObserveOnScroll(document.querySelectorAll('.testimonial'), .5);

let mobileMenu = new MobileMenu();


if (module.hot) {
  module.hot.accept();
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


// const itemsToReveal = document.querySelectorAll('.feature-item');
// itemsToReveal.forEach( el => {
//   console.log('hideInitially el' + el);
//   el.classList.add('reveal-item');
// });

// const revealSection = function(entries, observer) {
//   console.log('I Observe U!');
//   const [entry] = entries;
//   console.log('revealSection entry ' + entry);
//   entry.classList.add('reveal-item--is-visible');
//   observer.unobserve(entry.target);
// }

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: .25
// });



// itemsToReveal.forEach( el => sectionObserver.observe(el));