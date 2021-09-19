import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANuU5pgBjunsg9RShwhMRGWfmF6OO6xuU",
    authDomain: "movieforelite-44d1a.firebaseapp.com",
    projectId: "movieforelite-44d1a",
    storageBucket: "movieforelite-44d1a.appspot.com",
    messagingSenderId: "832690952842",
    appId: "1:832690952842:web:e84bfb159f88dce9c0ab73",
    measurementId: "G-4SHLD2KBPZ"
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
