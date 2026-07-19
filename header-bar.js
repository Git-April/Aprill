// header-component.js
class SiteHeader extends HTMLElement {
  connectedCallback() {
    fetch('header-bar.html')
      .then(response => response.text())
      .then(html => this.innerHTML = html);
  }
}
 
// Register the custom element
customElements.define('header-bar', SiteHeader);