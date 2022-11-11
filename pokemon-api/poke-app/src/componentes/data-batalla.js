import { LitElement, html, css } from 'lit';

export class DataBatalla extends LitElement {

    static properties = {
        pokemons: { type: Array},
        empezar: { type: Boolean}
    } 

    constructor(){
        super();
        this.pokemons = [];
        this.empezar = false;
    }

    ordenarTurnos() {
        let turnos = [];


        let random1 = Math.random();
        let random2 = Math.random();

        if(random1 > random2) { 
            turnos.push(this.pokemons[0]);
            turnos.push(this.pokemons[1]);
        }
        turnos.push(this.pokemons[1]);
        turnos.push(this.pokemons[0]);
        return turnos;
    }

    ataque(atk, hp){
        hp -= atk;
        return hp;
    }

    update(){
        if(this.empezar){
            this.batalla();
        }
    }

    batalla(){
        let pokemones = this.ordenarTurnos(); 
        let ganador = "";
        let turno = 1;

        while(pokemones[0].hp > 0 && pokemones[1].hp > 0){
            if(!turno === 0){
                pokemones[1].hp = this.ataque(pokemones[0].atk , pokemones[1].hp);
                turno++;
            } else {
                pokemones[0].hp = this.ataque(pokemones[1].atk , pokemones[0].hp);
                turno++;
            }
        }

        pokemones.forEach(poke => {
            if(poke.hp > 0){
                ganador = poke;
            }
        })

        this.dispatchEvent(new CustomEvent('ganador', {
            detail: {... ganador}, bubbles: true, composed: true
        }))
    }
}

