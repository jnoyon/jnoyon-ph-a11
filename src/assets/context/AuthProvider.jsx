import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import auth from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export default function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    // SignIn
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SignIn with Google
    const userSignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // Update User
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // observer
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsubscribe();
        }
    }, []);


    // Log out
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        userSignIn,
        userSignInWithGoogle,
        signOutUser,
        updateUser
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
