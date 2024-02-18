// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "radiostation-3dd99.firebaseapp.com",
  projectId: "radiostation-3dd99",
  storageBucket: "radiostation-3dd99.appspot.com",
  messagingSenderId: "745806227065",
  appId: "1:745806227065:web:90cfd4b2580ecdd5e196a8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
