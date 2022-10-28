import { css } from 'lit';


export default css`
    * {
    box-sizing: border-box;
    }
    :host {
        display: flex;
        flex-wrap: wrap;
    }

    .container {
        text-align: center;
    }

    get-data {
        display: none
    }

    .card {
        background: #fff;
        border-radius: 2px;
        display: flex;
        flex-wrap: wrap;
        height: 300px;
        width: 200px;
        margin: 1rem;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0,12) rgba(0,0,0,0,24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0,25) rgba(0,0,0,0,24);
    }

    .card img{
        width: 70%;
    }

`