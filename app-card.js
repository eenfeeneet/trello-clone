class NavBar extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: 'open' });

    var style = document.createElement('style');

    style.textContent = `
    .topnav {
      background-color: #027770;
      border: 2px solid #04998F;
      border-radius: 5px;
      height: 3em;
      padding: 2px;
    }
    
    .topnav a {
      float: left;
      display: block;
      color: #00BFB2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 1rem;
      box-sizing: border-box;
    }
    
    .topnav a:hover {
      color: black;
    }`;

    var navbar = document.createElement('div');
    navbar.setAttribute('class', 'topnav');
    navbar.setAttribute('id', 'myTopnav');

    // var homeLink = document.createElement('a');
    // homeLink.setAttribute('class', 'active');
    // homeLink.setAttribute('href', '#home');
    // homeLink.textContent = 'home';

    var newsLink = document.createElement('a');
    newsLink.setAttribute('href', '#news');
    newsLink.textContent = 'Trello-Clone';

    var info = document.createElement('span');
    info.setAttribute('class', 'info');

    shadow.appendChild(style);
    shadow.appendChild(navbar);

    navbar.appendChild(newsLink);
  }
}

customElements.define('app-navbar', NavBar);
