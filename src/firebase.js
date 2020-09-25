import firebase from "firebase";

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

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
