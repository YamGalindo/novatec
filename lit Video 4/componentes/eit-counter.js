import { LitElement, html, css } from 'lit';
import { WiredButton, WiredInput, WiredCard, WiredSlider } from "wired-elements";

export class EitCounter extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }
            slot {
                font-weight: bold;
                font-size: 1.5em;
            }
            .parrafo{
                color: red;
                font-size: 1.5em;
            }
            input{
                width: 50px;
                font-size: 1em;
                padding: 0.5em;
            }
        `
    ];

    static properties = {
        counter: {
            type: Number,
            reflect: true
        },
        quantity: {type: Number},
        lastNumber: {type: Number}

    }

    constructor() {
        super();
        this.counter = 0;
        this.quantity = 0;
        this.lastNumber = 0;
    }

    render() {
        return html`
            <wired-card elevation="3">
                <slot></slot>
                <p class="parrafo" >${this.counter}</p>
                <p>
                    <wired-input id="quantity" type="number" .value="${this.quantity}"></wired-input>
                </p>
                <p>
                    <wired-slider value="10" min="0" max="10" @change=${this.doChangeQuantity}>

                    </wired-slider>
                </p>
                <wired-button @click=${this.increment}>Incrementar</wired-button>
                <wired-button @click=${this.decrement}>Decrementar</wired-button>
            </wired-card>
            <wired-card elevation="3">
                <p>Ultimo Valor</p>
                <p>${this.lastNumber}</p>
            </wired-card>

         `;
    }

    doChangeQuantity(e){
        this.quantity = e.detail.value;
    }

    // get quantity() {
    //     return this.shadowRoot.getElementById('quantity').value;
    // }

    increment() {
        this.counter += parseInt(this.quantity);
        this.lastNumber = parseInt(this.quantity);
    }

    decrement() {
        this.counter -= parseInt(this.quantity);
        this.lastNumber = parseInt(this.quantity);
    }
}

customElements.define('eit-counter', EitCounter);

