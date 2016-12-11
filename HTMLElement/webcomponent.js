class myDiv extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: 'open'});

        var div = document.createElement('div');
        div.innerText = 'Testing 1 Overwrited';
        shadow.appendChild(div);
        

        this.addEventListener('click', () => {
            console.log('clicked');
        })
    }
}
customElements.define('my-div', myDiv);
