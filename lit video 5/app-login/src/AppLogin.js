import { LitElement, html, css } from 'lit';
import './login-lit';

export class AppLogin extends LitElement {
  static get properties() {
    return {
      success: {type: Boolean}
    };
  }
  static get styles(){
    return css`
      login-lit {
        display: flex;
        position: absolute;
        right: 42%;
        top: 15%;
      }
    `;
  }
  render() {
    return html`
      ${this.success 
      ?html`<h1>Bienvenido!</h1>`
      :html`<login-lit @sign="${this._hiddenLogin}"></login-lit>`}
    `;
  }

  _hiddenLogin(){
    this.success = true
  }
}
