import './app-navbar.js';
import './app-board.js';
import './app-create.js';

window.addEventListener('load', () => {
  loadApp();
});

function loadApp() {
  const main = document.getElementById('app');
  const navBar = document.createElement('app-navbar');
  const board = document.createElement('app-board');
  main.appendChild(navBar);
  main.appendChild(board);
}
