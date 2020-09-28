import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  
    const [name, setName] = useState('');

    return (
        <AuthContext.Provider value={{ name, setName }}>
            { props.children }
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;