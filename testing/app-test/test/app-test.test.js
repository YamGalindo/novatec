import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';

import '../app-test.js';

describe('AppTest', () => {
  it('has a default title "Hey there"', async () => {
    const el = await fixture(html`<app-test></app-test>`);

    expect(el.title).to.equal('Hey there');
  });

  it('Validando tipo dato a', async () => {
    const el = await fixture(html`<app-test></app-test>`);
    assert.typeOf(el.pokemonA, 'Object', 'tipo de dato esperado Object');
  });

  it('Validar Batalla', async () => {

    let pokemon1 = { "name": "Pokemon A", "img": "", "hp": 100, "power": 100, "battleWins": 0 };
    let pokemon2 = { "name": "Pokemon B", "img": "", "hp": 1, "power": 1, "battleWins": 0 };
    let battles = [];
    localStorage.setItem('battles', JSON.stringify(battles));

    const el = await fixture(html`<app-test .pokemonA=${pokemon1} .pokemonB=${pokemon2}></app-test>`);
    let respuesta = el.battle();
    console.log(localStorage)

    assert.respuesta = '"[{"name":"pokemon a","battleWins":1}]"'
  })
});


