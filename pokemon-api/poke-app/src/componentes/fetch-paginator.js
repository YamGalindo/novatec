import { LitElement, html, css } from "lit";
import { styles } from '../styles/paginatorStyles.js'


export class FetchPaginator extends LitElement {
    static styles = [styles, css` `];

    static properties = {

        pokemons: { type: Array },
        url: { type: String },
        anterior: {type: String},
        home: { type: String },
        siguiente: { type: String },
        actualizar: { type: Boolean}

    }


    constructor() {
        super();
        this.pokemons = [];
        this._url = "";
        this.home = "https://pokeapi.co/api/v2/pokemon?limit=6";
        this.anterior = '';
        this.siguiente = '';
        this._actualizar = false;

    }

    set actualizar(xd){
        if(!xd){
            this.getData(this.home);
            this._actualizar = false;
            return;
        }
            this.getData(this._url);
            this._actualizar = false;
    }

    async #fetcher(url) {
        const res = await fetch(url);
        return await res.json();
    }

    async firstUpdated() {
        const URL = "https://pokeapi.co/api/v2/pokemon?limit=6";
        await this.getData(URL);
    }

    async getData(url){
        const page = await this.#fetcher(url);
        this._url = url;
        this.siguiente = page.next;
        this.anterior = page.previous;
        const pokemonsUrl = page.results.map(x => x.url);
        const pokemonPromises = pokemonsUrl.map(url => this.#fetcher(url));
        const pokemosAllDataRes = await Promise.all(pokemonPromises);
        this.pokemons = pokemosAllDataRes;
    }

    #mapURLandNames() {
        function localParse({ name, stats: [{ base_stat: hp }, { base_stat: atk }], sprites: { front_default: img } }) {
            let victorias = JSON.parse(localStorage.getItem('victorias'));
            let wins = victorias[name] ?? 0 ;
            return {
                'name': name,
                'hp': hp,
                'atk': atk,
                'img': img,
                'wins': wins
            };
        };

        const localToParse = this.pokemons.map(localParse);
        return localToParse.map(({ img, name, hp, atk , wins}) => html`
              <poke-card img=${img} name=${name} hp=${hp} atk=${atk} wins=${wins}></poke-card>`
        );
    }

    async paginaAnterior(){
        await this.getData(this.anterior);
    }

    async paginaHome(){
        await this.getData(this.home);
    }

    async paginaSiguiente(){
        await this.getData(this.siguiente);
    }

    _update(){
        this.dispatchEvent(new CustomEvent('urlUpdate', {
            detail: this.url, bubbles: true, composed: true
        }))
    }

    render() {
        return html`
        <div class="paginator">
            ${this.#mapURLandNames()}
            ${this.anterior === null ? html`
                <div class="botones">
                    <button @click="${this.paginaHome}">Home</button>
                    <button @click="${this.paginaSiguiente}">-></button>
                </div>

                ` : html`
                <div class="botones">
                    <button @click="${this.paginaAnterior}"><-</button>
                    <button @click="${this.paginaHome}">Home</button>
                    <button @click="${this.paginaSiguiente}">-></button>
                </div>
                `}
                ${this.siguiente === null ? html`
                <div class="botones">
                    <button @click="${this.paginaAnterior}"><-</button>
                    <button @click="${this.paginaHome}">Home</button>
                </div>
            ` : html``}
        </div>
    `;
    }
}
