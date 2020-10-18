
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
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
  const { loginUser } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    const jsonSend = {
      email,
      password,
    };

    const loginURI = `${process.env.REACT_APP_BASE_URL}/login`
    await axios.post(loginURI, jsonSend)
      .then((res) => {
        if (res.status === 200) {
          loginUser(res.data.token);
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