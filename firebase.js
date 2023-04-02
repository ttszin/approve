import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDPdpkdoHOp98BfML2gZn-0QDUSMKIQ8Do",
    authDomain: "approve-1435e.firebaseapp.com",
    projectId: "approve-1435e",
    storageBucket: "approve-1435e.appspot.com",
    messagingSenderId: "1023652487015",
    appId: "1:1023652487015:web:de0c7282cca2577fd899c2",
    measurementId: "G-9924TEBQ5B"
});

const db = firebase.firestore();

export {db};