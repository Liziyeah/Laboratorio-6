import './components/export';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		const songCard = this.ownerDocument.createElement('app-song-card');
		this.shadowRoot?.appendChild(songCard);
	}
}

customElements.define('app-container', AppContainer);
