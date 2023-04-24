// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMvl_lwgHfHdYd4ZqWq6NMPmnQHczCZzM",
  authDomain: "store-d031d.firebaseapp.com",
  projectId: "store-d031d",
  storageBucket: "store-d031d.appspot.com",
  messagingSenderId: "808962492313",
  appId: "1:808962492313:web:1ddf3d5ed494738af8f508",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getDatabase(app);

export { auth, provider, storage };

export default db;
