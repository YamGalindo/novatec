import { css } from 'lit';

export const styles = css`

    .paginator {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: white;
        width: 49vw;
        height: 91vh;
        align-items: center;
        padding: 2px;
        border-radius: 1em;
    }
    .botones {
        display: flex;
        justify-content: center;
        padding: 6px;
    }

    button{
        padding: 2px;
        font-size: 1rem;
    }

    
    @media (max-width: 600px) {
        .paginator {
            width: 99vw;
        }

        .pokeCard {
            width: 96vw;
        }
        
    }


`