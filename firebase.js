// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN7IvyxBZ6GOUfDc-wOUoAd_bB672ZnYs",
  authDomain: "docs-f600e.firebaseapp.com",
  projectId: "docs-f600e",
  storageBucket: "docs-f600e.appspot.com",
  messagingSenderId: "482323630083",
  appId: "1:482323630083:web:cdfcfba095e721029da636",
  measurementId: "G-9C0ZLGYMV6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
