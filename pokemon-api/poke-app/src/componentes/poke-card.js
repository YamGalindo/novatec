import { LitElement, html, css } from "lit";
import { styles } from '../styles/pokeCardStyle.js'

export class PokeCard extends LitElement {
    static styles = [styles, css` `];

    static properties = {
        name: { type: String },
        hp: { type: String },
        atk: { type: String },
        img: { type: String },
        wins: { type: String }

    }

    constructor() {
        super();
        this.name = '';
        this.hp = '';
        this.atk = '';
        this.img = '';
        this._wins = 0 ;
        
        this.addEventListener('click', (e) => {
            e.stopPropagation();
            if(e.currentTarget){
                const data = {img: this.img, name: this.name, atk: this.atk , hp: this.hp, wins: this._wins}
                this._sendPokemon(data)
            }
        })
    }

    set wins(value){
        let oldvalue = this._wins;
        this._wins = value;
        this.requestUpdate("wins", oldvalue)
    }

    _sendPokemon(data) {
        this.dispatchEvent(new CustomEvent('PokeData', { 
            detail: { data }, bubbles: true, composed: true 
        }));
    }

    render() {
        return html`
            <div class="pokeCard">
                <button>
                    <img src="${this.img}">
                    <div class="info">
                        <span>
                            <p>NAME : ${this.name.toUpperCase()}</p>
                            <p>HP : ${this.hp}</p>
                            <p>ATK : ${this.atk}</p>
                            <p>WINS: ${this._wins}</p>
                        </span>
                    </div>
                </button>
            </div>
        `; 
    }
}
