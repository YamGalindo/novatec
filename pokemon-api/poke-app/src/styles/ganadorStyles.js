import { css } from 'lit';

export const styles = css`
    .ganador {
        display: flex;
        flex-direction: column;
        padding: 25px;
        width: 47.8vw;
        height: 40vh;
        background-color: white;
        border-radius: 1em;
        border: solid 2px;
        border-color: black;
        justify-content: space-between;
        
    }

    .pokeCard {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        height: 30vh;
        width: 46vw;
        padding: 10px;
        border: solid 1px;
        border-color: black;
    }

    .img {
        display: flex;
        height: 15rem;
        width: 15rem;
        justify-content: center;
    }

    .botonReset {
        display: flex;
        justify-content: center;

    }

    .info {
        display: flex;
        justify-content: center;
        font-size: 5rem;
    }

    .titulo {
        display: flex;
        justify-content: space-around;
        height: 2vh; 
        font-size: 3rem;
    }

    button {
        font-size: 2rem;
    }

    @media (max-width: 600px) {
        .ganador {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 91vw;
        }

        .pokeCard {
            width: 90vw;
            align-items: center;
            border: none;
        }

        .info {
            display: flex;
            justify-content: space-around;
            font-size: 2rem;
        }

        .titulo {
            height: 2vh; 
            font-size: 2rem;
        }

        .img{
            display: flex;
            justify-content: center;
            height: 10rem;
            width: 10rem;
        }

        img {
            display: flex;
            height: 10rem;
            width: 10rem;
        }
        button {
            font-size: 1.4rem;
        }

    }

`