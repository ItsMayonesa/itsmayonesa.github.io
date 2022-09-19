class LogoText extends HTMLElement {
    connectedCallback() {
        this.innerHTML =  `<p>Hello!!!!!</p>`
        this.style.color = "red"
    }
}

customElements.define("logo-element", LogoText)