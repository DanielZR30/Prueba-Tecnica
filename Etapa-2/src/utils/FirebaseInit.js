import {getFirestore,onSnapshot,collection,doc,deleteDoc,setDoc,addDoc,orderBy,query} from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Owuoxe-nepX9lmF4RbRjZMhnYmPklLo",
  authDomain: "propietarios-f825a.firebaseapp.com",
  projectId: "propietarios-f825a",
  storageBucket: "propietarios-f825a.appspot.com",
  messagingSenderId: "483782038071",
  appId: "1:483782038071:web:1c6dcfb088ca300a8325b2",
  measurementId: "G-170XKRLP13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db;