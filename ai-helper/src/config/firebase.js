import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA28pCNIYOfrlGGEv1HQZPOvW95iX2-i2Q",
    authDomain: "v54-team22.firebaseapp.com",
    databaseURL: "https://v54-team22-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "v54-team22",
    storageBucket: "v54-team22.firebasestorage.app",
    messagingSenderId: "160703570201",
    appId: "1:160703570201:web:4d854cde9d006edb4d6588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()
