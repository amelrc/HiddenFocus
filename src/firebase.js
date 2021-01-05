import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBfDxr8j_6FvwdjeF2OBRngg_IqO5Mfz7s",
  authDomain: "hf-contest.firebaseapp.com",
  projectId: "hf-contest",
  storageBucket: "hf-contest.appspot.com",
  messagingSenderId: "439370460880",
  appId: "1:439370460880:web:789ccd79e51a18ce78f8d5",
});

export const db = firebaseApp.firestore();
