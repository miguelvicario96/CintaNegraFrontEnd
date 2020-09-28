import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const NameInput = () => {
    const { setName } = useContext(AuthContext);

    return (
        <input 
        onChange={(e) => setName(e.target.value)}
        type="text" 
        label="Escribe tu nombre"/>
    );
}

export default NameInput