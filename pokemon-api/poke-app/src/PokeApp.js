import { LitElement, html, css} from 'lit';
import {styles} from './styles/pokeAppStyles';


export class PokeApp extends LitElement {
  static styles = [styles, css` `];

  static get properties() {
    return {
      title: { type: String },
      pokemons: { type: Array },
      ganador: { type: Object },
      actualizar: { type: Boolean},
      url: { type: Boolean}

    };
  }

  constructor(){
    super();
    this.pokemons = [];
    this.actualizar = false;
    this.url = "https://pokeapi.co/api/v2/pokemon?limit=6";
    this.addEventListener('PokeData', (e) => {
      let poke = e.detail.data;
      const noExiste_p = this.pokemons.filter((tmp, poke) => {
        const { name } = tmp
        const { name1 } = poke
        
        return name === name1;
      },[{...poke}, {...poke}]).length;

      if(noExiste_p > 0){
        return;
      }
      if(this.pokemons.length === 2){
        this.pokemons.shift(); 
      }
      this.pokemons.push(poke);
      this.requestUpdate();
    })
    localStorage.setItem('victorias', JSON.stringify({}));

    this.addEventListener('limpiar', (e) => {
      this.pokemons = [];
      this.actualizar = true;
    })

    this.addEventListener('urlUpdate', (e) => {
      this.actualizar = true;
    })
  }
  
  render() {
    return html`
      <fetch-paginator actualizar="${this.actualizar}"></fetch-paginator>
      <poke-batalla .pokemons="${this.pokemons}"></poke-batalla>
    `;
  }
}
