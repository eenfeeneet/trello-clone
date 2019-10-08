class Board extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: 'open' });

    var style = document.createElement('style');

    style.textContent = `
    .board {
      background-color: #027770;
      border: 2px solid #04998F;
      border-radius: 5px;
      height: 75vh;
      margin: 1rem 0;
      overflow: auto;
      display: flex;
    }
    .card {
      background-color: yellow;
      border: 2px solid #04998F;
      border-radius: 5px;
      margin: 10px;
      width: 25vw;
    }
    `;

    const createEvent = () => {
      alert('somethin clicked');
    };

    var board = document.createElement('div');
    board.setAttribute('class', 'board');

    var card = document.createElement('div');
    card.setAttribute('class', 'card');

    var buttonAdd = document.createElement('a');
    buttonAdd.setAttribute('onclick', createEvent);
    buttonAdd.textContent = '+ ADD';

    card.appendChild(buttonAdd);
    shadow.appendChild(style);
    shadow.appendChild(board);

    board.appendChild(card);
    card.appendChild(buttonAdd);
  }
}

customElements.define('app-board', Board);
