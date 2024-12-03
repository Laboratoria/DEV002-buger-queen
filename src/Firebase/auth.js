import {
    auth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  } from './firebase';

  // para Ingresar
const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// para signUp
const SignupLog = (email, password) => createUserWithEmailAndPassword(auth, email, password);

// para Salir
const logout = () => signOut(auth);

// para restringir
const userStateFirebase = (user) => onAuthStateChanged(auth, user);

export{
    login,
    logout,
    onAuthStateChanged,
    userStateFirebase,
    SignupLog
} 

