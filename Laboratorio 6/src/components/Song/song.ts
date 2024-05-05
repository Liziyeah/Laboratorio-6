import { AddSong } from '../../types/songsType';
import { getMusic } from '../../utils/firebase';

const formData: Omit<AddSong, 'id'> = {
	image: '',
	utitle: '',
	autor: '',
	album: '',
	date_added: '',
	duration: '',
};

export default class Song extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		const songs = await getMusic();
		songs.forEach((song: AddSong) => {
			const container = this.ownerDocument.createElement('section');
			const image = this.ownerDocument.createElement('img');
			image.innerText = song.image;
			container.appendChild(image);

			const utitle = this.ownerDocument.createElement('h1');
			utitle.innerText = song.utitle;
			container.appendChild(utitle);

			const autor = this.ownerDocument.createElement('p');
			autor.innerText = song.autor;
			container.appendChild(autor);

			const album = this.ownerDocument.createElement('p');
			album.innerText = song.album;
			container.appendChild(album);

			const date_added = this.ownerDocument.createElement('p');
			date_added.innerText = song.date_added;
			container.appendChild(date_added);

			const duration = this.ownerDocument.createElement('p');
			duration.innerText = song.duration;
			container.appendChild(duration);

			this.shadowRoot?.appendChild(container);
		});
	}
}

customElements.define('app-song', Song);
