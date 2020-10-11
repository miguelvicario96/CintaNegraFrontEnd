
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setIsAuth } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    const jsonSend = {
      email,
      password,
    };

    const postURI = `${process.env.REACT_APP_BASE_URL}/login`
    await axios.post(postURI, jsonSend)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          setToken(res.data.token);
          setIsAuth(true);
          alert('Successful Login');
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <React.Fragment>
      <h1 className="mb-4">Login to Miguel App</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Tu Email" />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Tu Contraseña" />
        </FormGroup>
        <Button>Enviar</Button>
      </Form>
    </React.Fragment>
  );
}
 
export default Login;