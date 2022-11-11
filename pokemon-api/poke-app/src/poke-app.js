import { PokeApp } from './PokeApp.js';
import { FetchPaginator } from './componentes/fetch-paginator';
import { PokeCard } from './componentes/poke-card';
import { PokeBatalla } from './componentes/poke-batalla';
import { DataBatalla } from './componentes/data-batalla';

customElements.define('poke-app', PokeApp);
customElements.define('fetch-paginator' ,  FetchPaginator);
customElements.define('poke-card', PokeCard);
customElements.define('poke-batalla', PokeBatalla);
customElements.define('data-batalla', DataBatalla);

