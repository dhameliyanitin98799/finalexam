// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqKU_YbPUtpaG-Ubskafc3V61dVegaPE0",
  authDomain: "exam-app-3f962.firebaseapp.com",
  projectId: "exam-app-3f962",
  storageBucket: "exam-app-3f962.appspot.com",
  messagingSenderId: "637028324914",
  appId: "1:637028324914:web:9ef8bedbcfc1c123b48e2b",
  measurementId: "G-29EYR1PTSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);