import React, { Children } from 'react'
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({children}) => {
 const isAuth = useSelector((store)=> store.AuthReducer.isAdmin);

 if(!isAuth) return <Navigate to="/login"/>
 return children
}


export const SecondPrivate =({children})=>{
    const isAuth = useSelector((s)=> s.AuthReducer.isAuth);
    if(!isAuth) return <Navigate to="/login"/>
    return children
}