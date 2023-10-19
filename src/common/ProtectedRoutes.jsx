import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoutes({children}) {

      let token =sessionStorage.getItem('token');
        if(!token)
          sessionStorage.clear();
      return token? children : <Navigate to='/'/>
}

export default ProtectedRoutes