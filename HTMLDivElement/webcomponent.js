class myDiv extends HTMLDivElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: 'open'});

        var div = document.createElement('div');
        div.innerText = 'This is a test';
        shadow.appendChild(div);
        

        this.addEventListener('click', () => {
            console.log('clicked');
        })
    }
}
customElements.define('my-div', myDiv);
