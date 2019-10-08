import './app-navbar.js';

window.addEventListener('load', () => {
  loadApp();
});

function loadApp() {
  const nav = document.querySelector('nav');
  const navBar = document.createElement('app-navbar');
  nav.appendChild(navBar);
}
