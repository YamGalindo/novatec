import { LitElement, html, css } from 'lit';
import { styles } from '../styles/ganadorStyles.js'

export class PokeGanador extends LitElement {
    static styles = [styles, css` `];

    static properties = {
        ganador: {type: Object}
    }

    constructor(){
        super();
        this._ganador = {};
    }

    set ganador(poke){
        let oldvalue = this._ganador;
        this._ganador = {... poke};
        this.requestUpdate("ganador" , oldvalue);
    }

    _formatData(){
        const {img, name} = this._ganador;
            return html`
                <div class="pokeCard">
                    <img src="${img}">
                    <div class="info">
                        <p>${name}</p>
                    </div>
                </div>
            `
    }

    _vacio(){
        if(Object.keys(this._ganador).length === 0){
            return html`
            <div class="pokeCard">
                <div class="img">
                    <img src="http://ichno.org/dokuwiki/lib/exe/fetch.php?cache=&media=characters:placeholder.png">
                </div>
                <div class="info">
                    <p> PokeGanador </p>
                </div>
            </div>
        `}
        return this._formatData();
    }

    _limpiar(){
        this.dispatchEvent(new CustomEvent('limpiar' , {
            detail: true , bubbles: true, composed: true
        }))
    }

    render() {
        return html`   
        ${Object.keys(this._ganador).length === 0 ? html`
            <div class="ganador">
                <div class="titulo">
                    <p> Ganador!!</p>
                </div> 
                <div class="pokemons">
                    ${this._vacio()}
                </div>
                <div class="botonReset">
                    <button Disabled> Nueva Batalla</button>
                </div>
            </div>` 
            : html`
            <div class="ganador">
                <div class="titulo">
                    <p> Ganador!!</p>
                </div> 
                <div class="pokemons">
                    ${this._vacio()}
                </div>
                <div class="botonReset">
                    <button @click="${this._limpiar}"> Nueva Batalla </button>
                </div>
            </div>
        
            `}
        `;
    }
}

customElements.define('poke-ganador', PokeGanador);

