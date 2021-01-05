import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApjiD8AKP9P8rkNviMBhJAuVa9YkoqrnE",
    authDomain: "galactigram.firebaseapp.com",
    databaseURL: "https://galactigram.firebaseio.com",
    projectId: "galactigram",
    storageBucket: "galactigram.appspot.com",
    messagingSenderId: "369364088359",
    appId: "1:369364088359:web:198d61f7af780532fe0002",
    measurementId: "G-FTX3JEX9GX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

  // export default debugger;