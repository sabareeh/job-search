// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKOBSTQ1WL-nqoDvQ07sfmMsFVS_buSdg",
  authDomain: "online-job-portal-c4959.firebaseapp.com",
  projectId: "online-job-portal-c4959",
  storageBucket: "online-job-portal-c4959.appspot.com",
  messagingSenderId: "59837185508",
  appId: "1:59837185508:web:848fda208faa3cbd33dbf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};