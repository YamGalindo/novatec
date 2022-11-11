import { css } from 'lit';

export const styles = css`

    .pokeCard {
        display: flex;
        justify-content: center;
        height: 13vh;
        width: 40vw;
        padding: 6px;
    }

    button {
        display: flex;
        width: inherit;
    }

    .info {
        display: flex;
        flex-direction: column;
        border: solid 1px;
        border-color: black;
        justify-content: center;
        flex-grow: 2;
        font-size: 1em; 
    }
    p{
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 600px) {
        .pokeCard {
            width: 98vw;
        }
    }

`