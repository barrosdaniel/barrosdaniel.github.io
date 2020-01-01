/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

// Colour Buttons
// UI elements
const body = document.querySelector('body');
const blueButton = document.querySelector('.header__colour--blue');
const redButton = document.querySelector('.header__colour--red');
const yellowButton = document.querySelector('.header__colour--yellow');
const greenButton = document.querySelector('.header__colour--green');
const cyanButton = document.querySelector('.header__colour--cyan');
const purpleButton = document.querySelector('.header__colour--purple');

// Event Listeners
blueButton.addEventListener('click', () => {
  body.style.background = 'linear-gradient(#001840, #002c73)';
});

redButton.addEventListener('click', () => {
  body.style.background = 'linear-gradient(#400000, #730000)';
});

yellowButton.addEventListener('click', () => {
  body.style.background = 'linear-gradient(#403f00, #6f7300)';
});

greenButton.addEventListener('click', () => {
  body.style.background = 'linear-gradient(#024000, #00730f)';
});

cyanButton.addEventListener('click', () => {
  body.style.background = 'linear-gradient(#003f40, #006d73)';
});

purpleButton.addEventListener('click', () => {
  body.style.background = 'linear-gradient(#40003c, #730060)';
});

// Replace footer copyright year with current year
document.querySelector('#year').textContent = new Date().getFullYear();