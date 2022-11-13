import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivatRoute = ({children}) => {
 const isAuth = useSelector((store)=> store.AuthReducer.isAuth);

 if(!isAuth) return <Navigate to="/login"/>
 return children
}

export default PrivatRoute