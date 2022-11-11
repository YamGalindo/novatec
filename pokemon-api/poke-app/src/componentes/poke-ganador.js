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
                    <img src="https://www.latercera.com/resizer/vx1_S0T1j_as_Uto1SJAUURxcqs=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/LUOOHUM2OVEEXG7ZTRSNI6XWLY.png">
                </div>
                <div class="info">
                    <p> Missing N0 </p>
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

