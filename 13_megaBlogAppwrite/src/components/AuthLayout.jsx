import React, { useState, useEffect } from 'react'
import { useSelecotr } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const Protected = ({ children, authentication = true}) => {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelecotr(state => state.auth.status);
    
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login');
        } else if (!authentication && authStatus !== authentication) {
            navigate('/');
        }
    }, [authStatus, navigate, authentication])
    
  return loader ? <h1>Loading...</h1> : <>{children}</>

}