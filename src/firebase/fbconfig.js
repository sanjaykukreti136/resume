import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAuEXETXMJD9nbA6onVAXpOLlmkA-g73xE",
  authDomain: "resume-site-a8142.firebaseapp.com",
  projectId: "resume-site-a8142",
  storageBucket: "resume-site-a8142.appspot.com",
  messagingSenderId: "1091480488694",
  appId: "1:1091480488694:web:5bc1342dd6086c80fa7ad7",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider, firebaseApp };
