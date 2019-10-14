import './app-card.js';

(function() {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
          .column {
            background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
            border: 5px double #916953;
border-radius: 20px;
            margin: 1rem;
            padding: 1rem;
            width: 25vw;
            height: auto;
          }
          .column-title {
            text-align: center;
            font-size: 0.75rem;
            display: flex;
            justify-content: space-around;
          }
          .column-content {
            
          }
          .column-cards {
            
          }
          .column-create {
            display: flex;
            justify-content: space-around;
            align-item: center;
          }
          
          .input {
            display: inline-block;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            width: 150px;
            height: 42px;
            cursor: pointer;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 0 20px;
            overflow: hidden;
            border: none;
            -webkit-border-radius: 21px;
            border-radius: 21px;
            font: normal 15px/normal "Antic", Helvetica, sans-serif;
            color: rgba(140,140,140,1);
            text-decoration: normal;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            background: rgba(40,40,40,0.4);
            -webkit-box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.5) inset;
            box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.5) inset;
            -webkit-transition: all 502ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            -moz-transition: all 502ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            -o-transition: all 502ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            transition: all 502ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
          }
          
          .input:hover {
            color: rgba(181,181,181,1);
            background: rgba(0,0,0,0.4);
            -webkit-transition: all 500ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            -moz-transition: all 500ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            -o-transition: all 500ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            transition: all 500ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
          }
          
          .input:focus {
            width: 150px;
            cursor: default;
            padding: -13px 20px 0;
            color: rgba(255,255,255,1);
            -webkit-transition: all 601ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            -moz-transition: all 601ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            -o-transition: all 601ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
            transition: all 601ms cubic-bezier(0.68, -0.75, 0.265, 1.75);
          }
          .btn{
            height: auto;
            background-color:#44c767;
            border-radius:15px;
            border:2px solid #18ab29;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family: 'Noto Sans JP', sans-serif;
            font-size:12px;
            padding:10px 13px;
            text-decoration:none;
            text-shadow:0px 1px 0px #2f6627;
          }
          .btn:hover{
             background-color:#5cbf2a;
          }
          .btn:active{
            position:relative;
            top:1px;
          }
          
          @media screen and (max-width: 600px) {
            .column {
              width: auto;
            }
          }
        </style>
        <div class="column">
          <div class="column-title">
            <h3></h3>
            <button class="btn rmv-column">delete</button>
          </div>
          <div class="column-content">
            <div class="column-cards">

            </div>
            <div class="column-create">
              <input class="card-input input" type="text" placeholder="Add Card"></input>
              <button class="add-card btn">ADD</button>
            </div>
          </div>
        </div>
      `;
  class Column extends HTMLElement {
    constructor() {
      // establish prototype chain
      super();

      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this.$title = this._shadowRoot.querySelector('h3');

      // binding methods
      this.addCard = this.addCard.bind(this);
      this.handleRemoveItemListeners = this.handleRemoveItemListeners.bind(
        this
      );
      this.removeListItem = this.removeListItem.bind(this);
    }

    // fires after the element has been attached to the DOM
    connectedCallback() {
      const removeElementButtons = [
        ...this.shadowRoot.querySelectorAll('.rmv-column')
      ];
      const addElementButton = this.shadowRoot.querySelector('.add-card');
      this.cardsContainer = this.shadowRoot.querySelector('.column-cards');

      this.handleRemoveItemListeners(removeElementButtons);
      addElementButton.addEventListener('click', this.addCard, false);
      this.renderColumn();
    }

    // add items to the list
    addCard(e) {
      const textInput = this.shadowRoot.querySelector('.card-input');

      if (textInput.value) {
        const card = document.createElement('app-card');
        card.content = textInput.value;
        this.cardsContainer.appendChild(card);

        textInput.value = '';
      }
    }
    static get properties() {
      return {
        title
      };
    }
    renderColumn() {
      this.$title.textContent = this.title;
    }
    get index() {
      return this.getAttribute('index');
    }
    set index(value) {
      this.setAttribute('index', value);
    }

    get items() {
      const items = [];

      [...this.attributes].forEach(attr => {
        if (attr.name.includes('list-item')) {
          items.push(attr.value);
        }
      });

      return items;
    }

    handleRemoveItemListeners(arrayOfElements) {
      arrayOfElements.forEach(element => {
        element.addEventListener('click', this.removeListItem, false);
      });
    }

    removeListItem(e) {
      // e.target.parentNode.remove();
      const el = this.shadowRoot.parentNode;
      const el2 = this.shadowRoot.parentElement;
      console.log(el);
      console.log(el2);
      console.log('delete');
      // e.target.parentNode.parentNode.remove();
    }
  }

  // let the browser know about the custom element
  customElements.define('app-column', Column);
})();
