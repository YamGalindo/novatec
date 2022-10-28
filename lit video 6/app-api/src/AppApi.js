import { LitElement, html} from 'lit';
import './componentes/GetData';
import  './componentes/TitleApi';

import styles from './styles/apiStyles';

export class AppApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array }
    };
  }

  static get styles() {
    return [ styles ];
  }

  constructor() {
    super();

    this.wiki = [];
    this.addEventListener('ApiData', (e) => {
      this._dataFormat(e.detail.data);
    })
  }

  _dataFormat(data) {
    let characters = [];
    data["results"].forEach(character => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status
      })
    });

    this.wiki = characters;

  }

  render() {
    return html`
      <api-title></api-title>
      <get-data url="https://rickandmortyapi.com/api/character" metho="GET"></get-data>
      ${this.dateTemplate}
    `;
  }

  get dateTemplate() {
    return html`
      ${this.wiki.map(character => html`
        <div class="card">
          <div class="card-content">
            <h2>${character.name}</h2>
            <img src="${character.img}">
            <p>${character.species + ' | ' + character.status}</p>
          </div>
        </div>
      `)}
    `;
  }
}
