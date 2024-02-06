// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXEMIJo2es-xO53JWOhJg7PebCPf9ntWk",
  authDomain: "netflix-gpt-fe6be.firebaseapp.com",
  projectId: "netflix-gpt-fe6be",
  storageBucket: "netflix-gpt-fe6be.appspot.com",
  messagingSenderId: "210730015797",
  appId: "1:210730015797:web:a4f1857c8023a29981257c",
  measurementId: "G-ZE1PPHND1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);