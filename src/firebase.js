
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA47GGHbvpdLqoaU7Ay-27-560vAeXK5NQ",
    authDomain: "app-to-do-97931.firebaseapp.com",
    projectId: "app-to-do-97931",
    storageBucket: "app-to-do-97931.appspot.com",
    messagingSenderId: "700659020999",
    appId: "1:700659020999:web:84b0b42af793946072bae2",
    measurementId: "G-74PHE9JZKF"
});
const db = firebaseApp.firestore();

export default db ;
