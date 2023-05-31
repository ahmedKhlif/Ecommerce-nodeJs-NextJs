import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyAZUGGUmwiV4axd5xJ9WLXmWIWBEZZhUXc",
    authDomain: "nextproject-benna.firebaseapp.com",
    projectId: "nextproject-benna",
    storageBucket: "nextproject-benna.appspot.com",
    messagingSenderId: "236568605619",
    appId: "1:236568605619:web:c43f7a37e2e32311cf51c6"
});

// Firebase storage reference
const storage = getStorage(app);
export default storage;