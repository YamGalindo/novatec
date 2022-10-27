import { LitElement, html, css } from "lit-element";

export class LoginLit extends LitElement {

    static get styles() {
        return css`
            .container {
                border: solid 3px #9c67c4;
                border-radius: 10px;
                width: 350px;
                height: 400px;
                text-align: center;
            }

            input {
                width: 90%;
                height: 30px;
                margin-top: 8vh;
                border: solid 1px #9c67c4;
                border-top: 0px;
                border-radius: 5px;
            }

            button {
                width: 60%;
                height: 20px;
                background-color: #9c67c4;
                border: none;
                border-radius: 6px;
                margin-top: 8vh;
            }

            button:hover {
                background: #744499;
                cursor: pointer;
            }
        `;
    }

    render() {
        return html`
            <div class="container">
                <h2>Login</h2>
                <input id="email" type="email" placeholder="Ingrese correo">
                <input id="pass" type="password" placeholder="Ingrese contrasena">
                <button @click="${this._login}">Iniciar Sesion</button>
            </div>
        `;
    }

    _login(){
        const email = this.shadowRoot.querySelector('#email').value;
        const pass = this.shadowRoot.querySelector('#pass').value;
        if(!!email && !!pass){
            this.dispatchEvent(new CustomEvent('sign',{
                detail: {login: true},
                bubbles: true, composed: true
            }))
        }
    }
}

customElements.define('login-lit', LoginLit);