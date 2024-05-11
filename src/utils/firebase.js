import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "samblog-a98d7.firebaseapp.com",
  projectId: "samblog-a98d7",
  storageBucket: "samblog-a98d7.appspot.com",
  messagingSenderId: "464489180953",
  appId: "1:464489180953:web:75171c726c1346ebd65f88",
  measurementId: "G-SDMGNLPN0V",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
