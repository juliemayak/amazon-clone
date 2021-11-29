import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA-JlwHCFnHl-HoIyZX8xOckyQqFN2sY_8',
  authDomain: 'clone-abdf2.firebaseapp.com',
  projectId: 'clone-abdf2',
  storageBucket: 'clone-abdf2.appspot.com',
  messagingSenderId: '119644581848',
  appId: '1:119644581848:web:594343643dbfdbc34a0cad',
  measurementId: 'G-046Q2VQC2E'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
