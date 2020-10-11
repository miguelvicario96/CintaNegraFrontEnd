import React, { useState } from 'react';
import axios from 'axios'
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const jsonSend = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    };

    const postURI = `${process.env.REACT_APP_BASE_URL}/signup`
    try {
      const res = await axios.post(postURI, jsonSend);
      if (res.status === 201) {
        alert("Successful Signup");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      alert("Error In Signup");
    }
    
  };

  return (
    <React.Fragment>
      <h1 className="mb-4">Signup on Miguel App</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="Tu Nombre" />
        </FormGroup>
        <FormGroup>
          <Label>Apellido</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="Tu Apellido" />
        </FormGroup>
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
 
export default Signup;