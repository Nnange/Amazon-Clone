import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDllHcqfILGAcf7CkRMnKiczLdAngKkZX0",
  authDomain: "amaclone-8e713.firebaseapp.com",
  databaseURL: "https://amaclone-8e713.firebaseio.com",
  projectId: "amaclone-8e713",
  storageBucket: "amaclone-8e713.appspot.com",
  messagingSenderId: "596507992825",
  appId: "1:596507992825:web:1587b05902c24f2667f828",
  measurementId: "G-LNV7Y0P8PB",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
