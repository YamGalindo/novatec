import { html, css, LitElement } from 'lit';

export class AppTest extends LitElement {

  static properties = {
    pokemonA: { type: Object },
    pokemonB: { type: Object },
    startBattle: { type: Boolean },
    title: { type: String}
  }

  constructor() {
    super();
    this.title = "Hey there";
    this.pokemonA = { "name": "Pokemon A", "img": "", "hp": 0, "power": 0, "battleWins": 0 };
    this.pokemonB = { "name": "Pokemon B", "img": "", "hp": 0, "power": 0, "battleWins": 0 };
  }


  battle() {

    let arr = [this.pokemonA, this.pokemonB];
    let turno = Math.round(Math.random() * (1 - 0) + 0);
    let ataca = arr[turno];
    let defiende = arr[Math.abs(turno - 1)];
    while (ataca.hp > 0 && defiende.hp > 0) {
      if (ataca.power >= defiende.hp) {
        defiende.hp = 0;
        break;
      } else {
        defiende.hp -= ataca.power;
      }
      turno = Math.abs(turno - 1)
      ataca = arr[turno];
      defiende = arr[Math.abs(turno - 1)];
    }
    let winner;
    let battles = JSON.parse(localStorage.getItem('battles'));

    if (ataca.hp === 0) winner = defiende;
    else winner = ataca;
  
    let isFound = false;
    battles.forEach(e => {
      if (e.name === winner.name.toLowerCase()) {
        e.battleWins++;
        isFound = true;
      }
    });
    if (!isFound) {
      battles.push({
        name: winner.name.toLowerCase(),
        battleWins: 1
      })
    }
    localStorage.setItem('battles', JSON.stringify(battles));
    this.dispatchEvent(new CustomEvent('Winner', {
      etail: {winner}, bubbles: true, composed: true
    }))
  }
}
