import { css } from 'lit';

export const styles = css`
    .eventos {
        display: flex;
        flex-direction: column;
        height: 40vh;
    }
    .batalla {
        display: flex;
        flex-direction: column;
        padding: 25px;
        width: 47.8vw;
        height: 40vh;
        background-color: white;
        border-radius: 1em;
        border: solid 2px;
        border-color: black;
        
    }
    
    .pokemons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border: solid 1px;
        border-color: black;
        border-radius: 2em;
        padding: 6px;

    }

    .pokeCard {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        
    }

    .img {
        display: flex;
        height: 15rem;
        width: 15rem;
        justify-content: center;
    }

    p {
        display: flex;
        justify-content: center;
        font-size: 2rem;
    }

    .comenzarBatalla {
        display: flex;
        justify-content: center;
        padding: 3px;
        
    }

    .boton {
        font-size: 2rem;
    }

    @media (max-width: 600px) {
        .batalla {
            width: 91vw;
        }
    }

    button {
        font-size: 1.4rem;
    }

`