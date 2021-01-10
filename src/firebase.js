import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmA0UG9yaoktmXL9RkKQFe7DXyUcNBjmE",
  authDomain: "galactigram2-49bc5.firebaseapp.com",
  projectId: "galactigram2-49bc5",
  storageBucket: "galactigram2-49bc5.appspot.com",
  messagingSenderId: "475611567940",
  appId: "1:475611567940:web:323e905d10ca428f08a911",
  measurementId: "G-JKHJ75GN5C"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

  // export default debugger
