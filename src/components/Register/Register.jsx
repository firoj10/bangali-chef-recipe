import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    return (
        <Container  >
        <Form className='w-75 mx-auto'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"  name='email' placeholder="Enter email" />
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name='password' placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label> Confram Password</Form.Label>
      <Form.Control type="password" name='confirm' placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button> <br/>
    <Form.Text className="text-muted text-success">
      Dont't Have an Account? <Link to="/login">Login</Link>
      </Form.Text>
      <Form.Text className="text-muted">
   
      </Form.Text>
      <Form.Text className="text-muted">
      <br />
      <hr />
      <Button className='m-2' variant="outline-primary">
        
             <FaGoogle /> Login with Google</Button>
        <Button  variant="outline-secondary" className='m-2'> <FaGithub></FaGithub> Login with Github</Button>
      </Form.Text>
  </Form>
 
        </Container>
    );
};

export default Register;