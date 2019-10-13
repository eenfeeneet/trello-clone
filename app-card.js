const template = document.createElement('template');
template.innerHTML = `
    <style>
    .card {
      -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 20px 10px rgba(111,128,138,0.5); 
      box-shadow: 0px 10px 13px -7px #000000, 0px 0px 20px 10px rgba(111,128,138,0.5);
      background: #0069BF;
      border: 5px solid #6F808A;
      border-radius: 5px;
      margin: 1rem auto;
      height: 100%;
      weight: 100%;
      text-align: center;
      font-family: 'Noto Sans JP', sans-serif;
    }
    </style>
    <div class="card">
        <h3></h3>
    </div>
`;
class Card extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$content = this._shadowRoot.querySelector('h3');
  }
  connectedCallback() {
    this.renderCard();
  }

  static get properties() {
    return {
      content
    };
  }
  renderCard() {
    this.$content.textContent = this.content;
  }
}

customElements.define('app-card', Card);
