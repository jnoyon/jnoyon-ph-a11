import React, { useContext } from 'react'
import AuthContext from './src/assets/context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    if(loading){
        return <div className='min-h-screen flex items-center justify-center'> <span className="loading loading-ring loading-lg"></span> </div>
    }

    if(user){
        return children;
    }
  return <Navigate to='/login' state={location?.pathname}> </Navigate>
}
