// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp5DztwDXMhd283ilfIudoN57TUGSHUS4",
  authDomain: "crud-43d7d.firebaseapp.com",
  projectId: "crud-43d7d",
  storageBucket: "crud-43d7d.appspot.com",
  messagingSenderId: "732138632178",
  appId: "1:732138632178:web:f03ed622c6cfdc708bf16b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);  