import React, {createContext}  from 'react'
import { Firestore } from "firebase/firestore";
import firebaseApp from "../../firebase/credenciales";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const LoginContext = createContext()


const LoginContextProvider = ({children}) => {

    const auth = getAuth(firebaseApp);
    const googleProvider = new GoogleAuthProvider();

    onAuthStateChanged (auth, (usuarioFirebase) =>{
        
    })

     


    const data = {auth, googleProvider, onAuthStateChanged}

    return (
        <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
    )
}
export {LoginContextProvider}
export default LoginContext
