import {LitElement, html} from 'lit';
import styles from '../styles/titleStyles';

export class TitleApi extends LitElement{

    static get styles(){
        return [styles]
    }

    render() {
        return html`
            <div class="container">
                <h1 class="title"><strong> Api the Rick and Morty </strong></h1>
            </div>
        `;
    }

}

customElements.define('api-title', TitleApi);