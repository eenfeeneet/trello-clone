class Create extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: 'open' });

    var style = document.createElement('style');

    style.textContent = `
    .card {
      background-color: yellow;
      border: 2px solid #04998F;
      border-radius: 5px;
      width: 25vw;
    }
    
    .card a {
      float: left;
      display: block;
      color: #00BFB2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 1rem;
      box-sizing: border-box;
    }
    
    .card a:hover {
      color: black;
    }`;

    function createEvent() {
      console.log('something added');
    }

    var card = document.createElement('div');
    card.setAttribute('class', 'card');

    var buttonAdd = document.createElement('a');
    buttonAdd.setAttribute('onclick', createEvent());
    buttonAdd.textContent = '+ ADD';

    shadow.appendChild(style);
    shadow.appendChild(card);

    card.appendChild(buttonAdd);
  }
}

customElements.define('app-create', Create);
