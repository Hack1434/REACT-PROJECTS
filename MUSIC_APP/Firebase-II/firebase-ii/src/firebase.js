// src/firebase.js
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCGCrL_dHkrcz_8UMd1FTV8HKe43zjqlvU",
    authDomain: "users-72a95.firebaseapp.com",
    projectId: "users-72a95",
    storageBucket: "users-72a95.appspot.com",
    messagingSenderId: "1003187262814",
    appId: "1:1003187262814:web:bf37b59787353532dc2bcf",
    measurementId: "G-Z0J0SX2DRQ",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default firebase;
export { db };
