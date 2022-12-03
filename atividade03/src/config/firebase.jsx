// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsutW862-xSvPHMVYGF92KELggY2HJA3g",
  authDomain: "atividade03-c0b44.firebaseapp.com",
  projectId: "atividade03-c0b44",
  storageBucket: "atividade03-c0b44.appspot.com",
  messagingSenderId: "1008646054884",
  appId: "1:1008646054884:web:c53796594bdc426bf69df1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
const db = getFirestore(app);

export {app, db};
