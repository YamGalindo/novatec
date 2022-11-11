import { LitElement, html, css } from 'lit';
import {styles} from '../styles/batallaStyles.js'
import "./poke-ganador"



export class PokeBatalla extends LitElement {
    static styles = [ styles, css` `];

    static properties = {

        pokemons: { type: Array },
        empezar: { type: Boolean },
        ganador: { type: Object}

    }

    constructor(){
        super();
        this._pokemons = [];
        this.empezar = false;
        this.ganador = {};
        this.addEventListener('ganador', e => {
            this.ganador = e.detail;
            let victorias = JSON.parse(localStorage.getItem('victorias'));
            let victoriasAcomuladas = victorias[this.ganador.name]
            if(victoriasAcomuladas === undefined){
                victoriasAcomuladas = 1;
            }else {
                victoriasAcomuladas++;
            }
            victorias[this.ganador.name] = victoriasAcomuladas;
            localStorage.setItem('victorias', JSON.stringify(victorias));
        })

        this.addEventListener('limpiar', e => {
            this.ganador = {};
            this.empezar= false;
            this.requestUpdate();
            
        })
        
    }

    _formatData(){
        return this._pokemons.map(({img, name}) => {
            return html`
                <div class="pokeCard">
                    <div class="img">
                        <img src="${img}">
                    </div>
                    <div class="info">
                        <p>${name}</p>
                    </div>
                </div>
            `
        })
    }

    _vacio(){
        if(this._pokemons.length === 0){
            return html`
                <div class="pokeCard">
                    <div class="img">
                        <img src="http://ichno.org/dokuwiki/lib/exe/fetch.php?cache=&media=characters:placeholder.png">
                    </div>                    
                    <div class="info">
                        <p> Pokemon 1 </p>
                    </div>
                </div>
                <div class="pokeCard">
                    <div class="img">
                        <img src="http://ichno.org/dokuwiki/lib/exe/fetch.php?cache=&media=characters:placeholder.png">
                    </div>
                    <div class="info">
                        <p> Pokemon 2 </p>
                    </div>
                </div>
            `
        }
        return this._formatData();
    }

    set pokemons(array){
        let oldvalue = this._pokemons;
        this._pokemons = [... array];
        this.requestUpdate("pokemons" , oldvalue);
    }

    _updateEmpezar(){
        this.empezar = true;
        this._empezarBatalla;
    }
    

    _empezarBatalla(){
        if(this._pokemons.length === 2 && this.empezar === true ){
            return html `
                <data-batalla .pokemons="${this._pokemons}" empezar="${this.empezar}"></data-batalla>
            `
        }
    }

    render() {
        return html`
        ${this._empezarBatalla()}
        ${this._pokemons.length < 2 ? html`
            <div class="eventos">
                <div class="batalla">
                    <div class="pokemons">
                        ${this._vacio()}
                    </div>
                    <div class="comenzarBatalla">
                        <button class="boton" @click="${this._updateEmpezar}" Disabled> Comezar Batalla</button>
                    </div>
                </div>
                <poke-ganador .ganador="${this.ganador}"></poke-ganador>
            </div>
        ` 
        : html`
        <div class="eventos">
            <div class="batalla">
                <div class="pokemons">
                    ${this._vacio()}
                </div>
                <div class="comenzarBatalla">
                    <button class="boton" @click="${this._updateEmpezar}"> Comezar Batalla</button>
                </div>
            </div>
            <poke-ganador .ganador="${this.ganador}"></poke-ganador>
        </div> `}
        `;
    }
}

