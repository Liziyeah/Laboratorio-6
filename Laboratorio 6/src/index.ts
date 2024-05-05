import './components/export';
import SongCard from './components/SongCard/songCard';
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const songCard = this.ownerDocument.createElement('song-card') as SongCard;
		this.shadowRoot?.appendChild(songCard);
	}
}

customElements.define('app-container', AppContainer);
