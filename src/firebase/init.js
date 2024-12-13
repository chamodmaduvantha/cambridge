// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMHclYAAClVt_ZrmKSZoV1PD9MQmE53M",
  authDomain: "cambridge-9cce6.firebaseapp.com",
  projectId: "cambridge-9cce6",
  storageBucket: "cambridge-9cce6.firebasestorage.app",
  messagingSenderId: "587913334236",
  appId: "1:587913334236:web:f0ecdc165066e6f71bd319"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db;