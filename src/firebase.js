import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBy-rYo5VBsBhx_O-4wOqO2v85DMga6IM0",
    authDomain: "projetopuc-d0335.firebaseapp.com",
    projectId: "projetopuc-d0335",
    storageBucket: "projetopuc-d0335.firebasestorage.app",
    messagingSenderId: "799562523006",
    appId: "1:799562523006:web:92385bf69b67149ecd532f"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
