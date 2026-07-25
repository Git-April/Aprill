class FooterBar extends HTMLElement {
  connectedCallback() {
    fetch('footer-bar.html')
      .then(response => response.text())
      .then(html => this.innerHTML = html);
  }
}

customElements.define('footer-bar', FooterBar);