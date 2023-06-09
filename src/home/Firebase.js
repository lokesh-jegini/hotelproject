import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBM32twPGnzzsv-Uu07LZJXj6fyt9iRY0M",
  authDomain: "register-6e570.firebaseapp.com",
  databaseURL: "https://register-6e570-default-rtdb.firebaseio.com",
  projectId: "register-6e570",
  storageBucket: "register-6e570.appspot.com",
  messagingSenderId: "325968421948",
  appId: "1:325968421948:web:81d500309758875bda0f39",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseDB = firebase.firestore(); // Use firestore() instead of database()

export default firebaseDB;