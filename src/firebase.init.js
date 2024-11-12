// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHlwhjhOL_SPRrYY8KLeKyTV7jq40ELDc",
  authDomain: "auth-moha-milon-24e7e.firebaseapp.com",
  projectId: "auth-moha-milon-24e7e",
  storageBucket: "auth-moha-milon-24e7e.firebasestorage.app",
  messagingSenderId: "801294236508",
  appId: "1:801294236508:web:cfc10d955ce08512991f99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
