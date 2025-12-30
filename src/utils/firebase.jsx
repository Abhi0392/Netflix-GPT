// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVaVvIAm_wBl6Nqef2Hhwhgw_YAXDxiW4",
  authDomain: "netflixgpt-bcaa0.firebaseapp.com",
  projectId: "netflixgpt-bcaa0",
  storageBucket: "netflixgpt-bcaa0.firebasestorage.app",
  messagingSenderId: "1033571156544",
  appId: "1:1033571156544:web:273a3277efbd389eae15a5",
  measurementId: "G-YJLVNGFHLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
