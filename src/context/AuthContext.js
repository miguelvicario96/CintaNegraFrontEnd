import React, { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    const loginUser = (token) => {
        localStorage.setItem('token', token);
        const decoded = decode(token);
        setIsAuth(true);
        setUser(decoded)
    }

    const logoutUser = () => {
        localStorage.removeItem('token');
        setIsAuth(false);
        setUser({});
    }

    useEffect(() => {
        const item =  localStorage.getItem('token');
        if (item) {
            const decoded = decode(item);
            setIsAuth(true);
            setUser(decoded)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ 
            isAuth, user, loginUser, logoutUser
        }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;