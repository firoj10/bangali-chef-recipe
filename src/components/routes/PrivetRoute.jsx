import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    console.log(user);
    const location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="primary" />;
    }
  if(user){
    return children;
  }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;



