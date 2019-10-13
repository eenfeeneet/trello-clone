class NavBar extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: 'open' });

    var style = document.createElement('style');

    style.textContent = `
    .topnav {
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px 15px rgba(0,0,0,0.5); 
      box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px 15px rgba(0,0,0,0.5);
      background: #008CFF;
      border: 5px ridge #916953;
      border-radius: 20px;
      height: 5rem;
      box-sizing: border-box;
      margin: 1rem;
      display: flex;
      justify-content: center;
      font-family: 'Noto Sans JP', sans-serif;
    }
    
    .topnav a {
      align-self: center;
      text-align: center;
      text-decoration: none;
      font-size: 1.5rem;
    }
    
    .topnav a:hover {
      color: black;
    }`;

    var navbar = document.createElement('div');
    navbar.setAttribute('class', 'topnav');
    navbar.setAttribute('id', 'myTopnav');

    var newsLink = document.createElement('a');
    newsLink.textContent = 'Trello-Clone';

    shadow.appendChild(style);
    shadow.appendChild(navbar);

    navbar.appendChild(newsLink);
  }
}

customElements.define('app-navbar', NavBar);
