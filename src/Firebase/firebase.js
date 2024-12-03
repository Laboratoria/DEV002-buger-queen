// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{ 
  getAuth,    
  signOut,
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth"
// import { getFirestore } from "firebase/firestore";
import { 
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  arrayUnion
 } from "firebase/firestore";
 
import { firebaseConfig } from "./config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
// const ConseguirDocumento=()=>{

// }
// addDoc((collection(db,"prueba1")),{name:"andrea", correo:"@gmail.com", contra:1234, result:"se logro"})
// .then(valor=>console.log(valor))

// para Firebase (auth.js)
export{
  app,
  auth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
}

export{
  db,
  collection,
  addDoc,
  setDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  arrayUnion
}