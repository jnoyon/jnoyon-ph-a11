import React, { useState } from 'react'
import AuthContext from './AuthContext'
import auth from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function AuthProvider({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const authInfo = {
        user,
        loading,
        createUser
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
