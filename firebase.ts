// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHhcrUXWD_1XWUTUsAVSnZu2MiCbyvXFY",
  authDomain: "qualityunitedwriters.firebaseapp.com",
  databaseURL: "https://qualityunitedwriters-default-rtdb.firebaseio.com",
  projectId: "qualityunitedwriters",
  storageBucket: "qualityunitedwriters.appspot.com",
  messagingSenderId: "780244861971",
  appId: "1:780244861971:web:93f012d1258f01f4416be6",
  measurementId: "G-354TXMBY1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);