class HeaderBar extends HTMLElement {
  connectedCallback() {
    fetch('header-bar.html')
      .then(response => response.text())
      .then(html => this.innerHTML = html);
  }
}

customElements.define('header-bar', HeaderBar);