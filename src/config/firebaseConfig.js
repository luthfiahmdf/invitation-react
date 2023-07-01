// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByQVHFdEatPhrFoMslgTVBAnOg_JovqVk",
  authDomain: "wedding-b3256.firebaseapp.com",
  projectId: "wedding-b3256",
  storageBucket: "wedding-b3256.appspot.com",
  messagingSenderId: "833536120307",
  appId: "1:833536120307:web:46d56e4aac903e36e46e86",
  measurementId: "G-RB1VMHWHHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
