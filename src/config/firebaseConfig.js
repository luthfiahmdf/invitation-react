// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPz_UmIsikzxYjIJ-NaW-NT8G39NOlHhE",
  authDomain: "wedding-3dba0.firebaseapp.com",
  projectId: "wedding-3dba0",
  storageBucket: "wedding-3dba0.appspot.com",
  messagingSenderId: "876358237373",
  appId: "1:876358237373:web:bae028f63bff150682cbd4",
  measurementId: "G-K1FGP50E1J",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
