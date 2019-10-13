import './app-column.js';

(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      .board {
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px 15px rgba(0,0,0,0.5); 
        box-shadow: 0px 10px 13px -7px #000000, 0px 0px 25px 15px rgba(0,0,0,0.5);
        background: #008CFF;
        border: 5px ridge #916953;
        border-radius: 20px;
        height: 80%;
        width: auto;
        margin: 1rem;
        font-family: 'Noto Sans JP', sans-serif;
      }
      .board-title {
        text-align: center;
        font-size: 1rem;
      }
      .board-content {
        height: 65%;
        display: flex;
        overflow-x: auto;
      }
      .board-columns {
        height: auto;
        display: flex;
      }
      .controls {
        display: flex;
        justify-content: center
      }
      .board-create {
        background-color: #F7C4A5;
        border: 5px double #916953;
        border-radius: 20px;
        margin: 1rem;
        padding: 1rem;
        width: 25vw;
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
        color: #696969;
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
        
        .board {
          // flex-flow: column nowrap;
        }
        .board-columns {
          width: 100%;
          flex-flow: column nowrap;
        }
        .board-create {
          
          width: 100%;
          
        }
      }
    </style>
    <div class="board">
      <div class="board-title">
        <h3>My Board</h3>
      </div>
      <div class="board-content">
        <div class="board-columns">
        </div>
      </div>
      <div class="controls">
        <div class="board-create">
          <input class="col-input input" type="text" placeholder="Add a column"></input>
          <button class="add-column btn">ADD</button>
        </div>
      </div>
    </div>
    `;
  class Board extends HTMLElement {
    constructor() {
      super();

      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));

      this.$title = this._shadowRoot.querySelector('h3');

      // binding methods
      this.addColumn = this.addColumn.bind(this);
      this.handleRemoveItemListeners = this.handleRemoveItemListeners.bind(
        this
      );
      this.removeListItem = this.removeListItem.bind(this);
    }

    connectedCallback() {
      console.log('app mounted');
      const removeElementButtons = [
        ...this.shadowRoot.querySelectorAll('.editable-list-remove-item')
      ];
      const addElementButton = this.shadowRoot.querySelector('.add-column');

      this.columnContainer = this.shadowRoot.querySelector('.board-columns');

      this.handleRemoveItemListeners(removeElementButtons);
      addElementButton.addEventListener('click', this.addColumn, false);
    }

    addColumn(e) {
      const textInput = this.shadowRoot.querySelector('.col-input');

      if (textInput.value) {
        const button = document.createElement('button');
        const column = document.createElement('app-column');

        button.classList.add('editable-list-remove-item', 'icon');

        column.title = textInput.value;
        button.innerHTML = '&ominus;';

        column.appendChild(button);
        this.columnContainer.appendChild(column);

        this.handleRemoveItemListeners([button]);

        textInput.value = '';
      }
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
      e.target.parentNode.remove();
    }
  }

  // let the browser know about the custom element
  customElements.define('app-board', Board);
})();
