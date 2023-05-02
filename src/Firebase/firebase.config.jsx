// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNynlT3nrPHu9v1vjjgzUXxdvi6E2syj4",
  authDomain: "client-food-chef.firebaseapp.com",
  projectId: "client-food-chef",
  storageBucket: "client-food-chef.appspot.com",
  messagingSenderId: "54538917172",
  appId: "1:54538917172:web:6c2fafc35e841203c5c161"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);