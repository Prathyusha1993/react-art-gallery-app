// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8V03tCCcNsKJbD4w4QyyMNzkHSDH_xpI",
  authDomain: "clay-art-gallery.firebaseapp.com",
  projectId: "clay-art-gallery",
  storageBucket: "clay-art-gallery.appspot.com",
  messagingSenderId: "933522690622",
  appId: "1:933522690622:web:d76fdb635ca30149daf76f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();