
import firebase from "firebase";
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
const firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();