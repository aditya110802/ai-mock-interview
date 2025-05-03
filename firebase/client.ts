import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCxPPj2XOLLgRkqH3UsvJulVuBKkUKaYEM",
  authDomain: "prepwise-f1bf0.firebaseapp.com",
  projectId: "prepwise-f1bf0",
  storageBucket: "prepwise-f1bf0.firebasestorage.app",
  messagingSenderId: "857475020848",
  appId: "1:857475020848:web:1f9de6562b227ad9a155f5",
  measurementId: "G-G46N7C662Z"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);