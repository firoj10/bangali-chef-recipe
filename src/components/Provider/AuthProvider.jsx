import React, { createContext} from 'react';
import {  GithubAuthProvider, GoogleAuthProvider,  getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
   

 
    const sinInWithGoogle = ()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }

    const sinInWithGithub = ()=>{
        return signInWithPopup(auth, githubAuthProvider)
    }

    //observe auth change
 
   
    const authInfo = {
        sinInWithGithub,
        sinInWithGoogle 
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;