class NavBar extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    var shadow = this.attachShadow({mode: 'open'});

  }

}

customElements.define('my-navbar', NavBar);