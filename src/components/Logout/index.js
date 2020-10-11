import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const { setToken, setIsAuth  } = useContext(AuthContext);
  setToken('');
  setIsAuth(false);
  localStorage.removeItem('token')
  alert('Successful Logout');
  return (
    <Redirect to="/login" />
  )
}

export default Logout;