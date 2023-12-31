import React, { createContext, useEffect, useState} from 'react';
import {  GithubAuthProvider, GoogleAuthProvider,  createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';



const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoding]= useState(true)
    const createUser = (email, password)=>{
        setLoding(true)
      return createUserWithEmailAndPassword(auth, email, password);
    }
    const singIn = (email, password)=>{
        setLoding(true)
      return signInWithEmailAndPassword(auth, email, password);
    
    }

    const sinInWithGoogle = ()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }

    const sinInWithGithub = ()=>{
        return signInWithPopup(auth, githubAuthProvider)
    }
    const updateUserProfile = (profile) => {
        
        return updateProfile(auth.currentUser, profile ).then(()=>{
            setUser((puser)=>{
return {...puser, ...profile}
            })
        })
        

     }
     const logout = ()=>{
        return signOut(auth);
    }

    //observe auth change
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth, currentser =>{
            console.log('auth state change', currentser)
            setUser(currentser)
            setLoding(false)
           
        })
        return ()=>{
            unsubsribe();
        }
   
    }, [])
   
    const authInfo = {
        user,
        sinInWithGithub,
        sinInWithGoogle ,
        createUser,
        updateUserProfile,
        singIn,
        logout,
        loading
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