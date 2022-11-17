import React, { useContext } from 'react';
import {Navigate, useLocation } from 'react-router-dom';
import { AuthUserContext } from '../../Context/UserContext/UserContext';


const ProtectedRoutes = ({children}) => {

    // taking user from user Context.
    const {user } = useContext(AuthUserContext);

    // taking user current location.
    const location = useLocation();


    

    return (
        user?
        <div>
            {children}
        </div>
        :
        <Navigate to='/login' state={{ from:location }} replace></Navigate>

    );
};

export default ProtectedRoutes;