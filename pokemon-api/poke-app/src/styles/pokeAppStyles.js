import { css } from 'lit';

export const styles = css`
    :host {
        display: flex;
    }

    @media (max-width: 600px) {
        :host {
            flex-direction: column;
        }
    }
`