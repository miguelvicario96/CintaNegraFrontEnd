import React, { Fragment } from 'react';
import Navigation from './components/Navigation'
import NameInput from './components/NameInput'
import AuthContextProvider from './context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
      <Navigation/>
      <div className="container">
      <h1>Hola Mundo</h1>
      <NameInput/>
    </div>
    </AuthContextProvider>
  );
}

export default App;
