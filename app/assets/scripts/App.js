import '../styles/styles.css';

if (module.hot) {
  module.hot.accept();
}

// LESSON EXAMPLE CODE BELOW
function person(name, color) {
  console.log(`My name is ${name} and my fav color is ${color}`)
}

person('James Milton', 'pink')
person('Gisele burke', 'brown')
