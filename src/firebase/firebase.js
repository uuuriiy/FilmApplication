import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3kPsfdAa4Q3h7CTAfN-xheFBOX08TuDY",
    authDomain: "movieforelite-5a919.firebaseapp.com",
    projectId: "movieforelite-5a919",
    storageBucket: "movieforelite-5a919.appspot.com",
    messagingSenderId: "391509957904",
    appId: "1:391509957904:web:6e5396d66db83b38051995",
    measurementId: "G-29MMDGL3BP"
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
