import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBQ1Ew9dvXO5xAaltAA5if2z8QqmCFEwao",
  authDomain: "clone-5a3ac.firebaseapp.com",
  databaseURL: "https://clone-5a3ac.firebaseio.com",
  projectId: "clone-5a3ac",
  storageBucket: "clone-5a3ac.appspot.com",
  messagingSenderId: "858801181810",
  appId: "1:858801181810:web:5f43de8aa361dce401deeb",
  measurementId: "G-7T7G8WJNNT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebaseApp.firestore()

export { db, auth, storage };