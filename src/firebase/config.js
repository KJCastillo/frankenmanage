import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAShrboYDlz4yNFUy6sByy9IPKDFI0Ux8Y",
  authDomain: "frankenmanage.firebaseapp.com",
  projectId: "frankenmanage",
  storageBucket: "frankenmanage.appspot.com",
  messagingSenderId: "808142711583",
  appId: "1:808142711583:web:e8ad7acf5da193b4821e2a",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp 
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }