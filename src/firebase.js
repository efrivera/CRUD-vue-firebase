import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjbWK57RalljotXkPNB7OmSgAe75XyxIU',
  authDomain: 'vuefirebasesergio.firebaseapp.com',
  databaseURL: 'https://vuefirebasesergio.firebaseio.com',
  projectId: 'vuefirebasesergio',
  storageBucket: '',
  messagingSenderId: '912125984673',
  appId: '1:912125984673:web:6ff2204dbc0bbe3f',
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);

export default fireBaseApp.firestore();
