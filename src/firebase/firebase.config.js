// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdEyDKfESLFWEkSwQaXi9C-gzXV1Nt7oU",
  authDomain: "bangali-chef-recipe.firebaseapp.com",
  projectId: "bangali-chef-recipe",
  storageBucket: "bangali-chef-recipe.appspot.com",
  messagingSenderId: "610964759193",
  appId: "1:610964759193:web:96594a85e3466afa0d8e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;