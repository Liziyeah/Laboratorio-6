import { AddSong } from '../../types/songsType';
import { addMusic, getMusic } from '../../utils/firebase';
import Song from '../Song/song';

const formData: Omit<AddSong, 'id'> = {
	image: '',
	utitle: '',
	autor: '',
	album: '',
	date_added: '',
	duration: '',
};

export default class SongCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeimage(e: any) {
		formData.utitle = e?.target?.value;
	}
	changepTitle(e: any) {
		formData.image = e?.target?.value;
	}
	changeAutor(e: any) {
		formData.autor = e?.target?.value;
	}
	changeAlbum(e: any) {
		formData.album = e?.target?.value;
	}
	changeDateadded(e: any) {
		formData.date_added = e?.target?.value;
	}
	changeDuration(e: any) {
		formData.duration = e?.target?.value;
	}

	submitForm() {
		addMusic(formData);
	}

	async render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = ``;

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

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'Add';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot?.appendChild(save);

			const songs = this.ownerDocument.createElement('app-song');
			this.shadowRoot?.appendChild(songs);
		});
	}
}

customElements.define('song-card', SongCard);
