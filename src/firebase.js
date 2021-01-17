// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBuu9bEF_gtQ6DYqyZ5Qq50fXlF0riF0g",
  authDomain: "chat-app-fd54d.firebaseapp.com",
  projectId: "chat-app-fd54d",
  storageBucket: "chat-app-fd54d.appspot.com",
  messagingSenderId: "763638337845",
  appId: "1:763638337845:web:712a9e52a09c3de33d7c7c",
  measurementId: "G-69RVFFR2JE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
