import firebase from "firebase";
import "firebase/auth"


var firebaseConfig = {
  apiKey: "AIzaSyBgwv-5jkmTNDe3VVHVf5RaUW-r3UIg5zc",
  authDomain: "bikemandan-7d0aa.firebaseapp.com",
  projectId: "bikemandan-7d0aa",
  storageBucket: "bikemandan-7d0aa.appspot.com",
  messagingSenderId: "392224527395",
  appId: "1:392224527395:web:2334c6a1c967f3bb000d96",
  measurementId: "G-H131WNEKSV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// get database from firebase store
// const database = firebase.firestore()

const auth = firebase.auth()
const db = firebase.database().ref("profile")
export {auth,db}
