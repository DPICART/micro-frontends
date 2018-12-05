// Code permettant d'utiliser <checkout-panier> en tag html
(function fragments()
{

    class CheckoutPanier extends HTMLElement {
        static get observedAttributes(){
            return ['uid'];
        }

        connectedCallback() {
            const uid = this.getAttribute('uid');
            this.log('connectedCallback', uid);
            this.render();
        }

        attributeChangedCallback(attr, oldValue, newValue) {
            this.log('attributeChangedCallback', attr, newValue);
            this.render();
        }

        render()
        {
            const uid = this.getAttribute('uid');
            this.innerHTML = `
            <h3>Mon panier de uid= ${uid}</h3>`;
        }

        disconnectedCallback() {
            const uid = this.getAttribute('uid');
            this.log('disconnectedCallback', uid);
        }

        log(...args) {
            console.log('log ', ...args);
        }

    }
    window.customElements.define('checkout-panier', CheckoutPanier); 
}());