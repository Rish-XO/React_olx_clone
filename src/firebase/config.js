import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCRQyh9b_M5VUSmp95HbIAzMqEpKPvCCus",
    authDomain: "olx-react-bcbf8.firebaseapp.com",
    projectId: "olx-react-bcbf8",
    storageBucket: "olx-react-bcbf8.appspot.com",
    messagingSenderId: "960632131846",
    appId: "1:960632131846:web:32105afb347bb21d990e87",
    measurementId: "G-8GMG83RLKP"
  };

 export default firebase.initializeApp(firebaseConfig)