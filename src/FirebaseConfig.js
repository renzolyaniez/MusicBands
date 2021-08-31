import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAntx-TGeUZvfBVDQGEIO4-QTesMQRw2ao",
  authDomain: "entrevista-e13f0.firebaseapp.com",
  projectId: "entrevista-e13f0",
  storageBucket: "entrevista-e13f0.appspot.com",
  messagingSenderId: "695074488394",
  appId: "1:695074488394:web:1c668bd27bb9e6d3f4a6b3",
  measurementId: "G-EYWDSRPSWN"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export {auth}