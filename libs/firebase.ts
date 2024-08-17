// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMs2hB5w4ZEXesakorGeTLtI3bhsMX8k0",
  authDomain: "eco-shopping-b49b5.firebaseapp.com",
  projectId: "eco-shopping-b49b5",
  storageBucket: "eco-shopping-b49b5.appspot.com",
  messagingSenderId: "693859912699",
  appId: "1:693859912699:web:1b517ed7c0406d8c0b595e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp