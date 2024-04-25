/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)
const ProviderContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [autoUpdate, setAutoUpdate] = useState(false)
    const provider = new GoogleAuthProvider();



    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const  userLogin =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    
    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }



    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }





    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in tha state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        return () =>{
            unSubscribe();
        }
    },[autoUpdate])


    
    // update user profile
    const updateUserProfile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }


    
    const info = {
        user,
        createUser,
        userLogin,
        googleLogin,
        logOut,
        loading,
        setAutoUpdate,
        updateUserProfile,
        

    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;