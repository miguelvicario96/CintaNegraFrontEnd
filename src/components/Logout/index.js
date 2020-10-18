import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const { logoutUser  } = useContext(AuthContext);
  logoutUser();
  alert('Successful Logout');
  return (
    <Redirect to="/login" />
  )
}

export default Logout;