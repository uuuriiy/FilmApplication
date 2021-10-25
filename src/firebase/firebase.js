import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2EQ_hUFZbYGmYTU6CwbpOYEND1BVPtGo",
    authDomain: "film-cb83a.firebaseapp.com",
    projectId: "film-cb83a",
    storageBucket: "film-cb83a.appspot.com",
    messagingSenderId: "948146423665",
    appId: "1:948146423665:web:65afaebd59c9cf597b98d0",
    measurementId: "G-9ETNG0C4B7"
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export const signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
}

export const signOut = () => {
    auth.signOut();
}

export {
    auth,
    firebaseApp,
    db
}
