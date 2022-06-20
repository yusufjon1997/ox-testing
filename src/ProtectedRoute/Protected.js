import React from 'react'
import { Navigate } from 'react-router-dom';


const Protected = ({children}) => {

    const token = sessionStorage.getItem('Authtoken')

    if(!token) {
        return <Navigate to="/login" />
    } else {
        return children;
    }
}

export default Protected