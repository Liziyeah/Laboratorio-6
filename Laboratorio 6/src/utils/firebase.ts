const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getAnalytics } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { AddSong } from '../types/songsType';

const firebaseConfig = {
	apiKey: 'AIzaSyB5ULDsZLw1NVEMNHEHsduXEUt5ra3NU30',
	authDomain: 'lab6-93aa1.firebaseapp.com',
	projectId: 'lab6-93aa1',
	storageBucket: 'lab6-93aa1.appspot.com',
	messagingSenderId: '508584191281',
	appId: '1:508584191281:web:0036e4628ddf09d3b87c10',
	measurementId: 'G-PLQMNSBVEC',
};

const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export const addMusic = async (formData: Omit<AddSong, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'songs'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getMusic = async () => {
	const querySnapshot = await getDocs(collection(db, 'Music'));
	const arraySongs: Array<AddSong> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		arraySongs.push({ id: doc.id, ...data });
	});
	console.log('get', arraySongs);
	return arraySongs;
};
