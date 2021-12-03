import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import 'firebase/compat/auth'
import { getAuth, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlKiz7UT3X1fF-gTgdJQlD12iDFN3Lbas",
  authDomain: "login-ecommerce-c8694.firebaseapp.com",
  projectId: "login-ecommerce-c8694",
  storageBucket: "login-ecommerce-c8694.appspot.com",
  messagingSenderId: "717071805680",
  appId: "1:717071805680:web:1beaf5d92d0d7dce546635",
  measurementId: "G-94MM04JQ5D"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const googleProvider = new firebase.auth.GoogleAuthProvider()
const auth = getAuth()
const logOut = ()=>{
  return signOut(auth)
}
export { db, googleProvider, firebase, logOut }



