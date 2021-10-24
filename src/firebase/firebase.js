import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBb1JCp6uvGj0YbUp-Rb69NEplUWAzkPSs",
    authDomain: "movieforelite-ab395.firebaseapp.com",
    projectId: "movieforelite-ab395",
    storageBucket: "movieforelite-ab395.appspot.com",
    messagingSenderId: "919492791792",
    appId: "1:919492791792:web:7b2dd823e18512e997e135",
    measurementId: "G-NQZ7R76J6T"
});

const auth = firebase.auth();

export const signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
}

export const signOut = () => {
    auth.signOut();
}

export {
    auth,
    firebaseApp
}
