import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { sinInWithGoogle, sinInWithGithub} = useContext(AuthContext)

  const handleGoogleSignIn = () => {
    sinInWithGoogle()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const handleGithubSignIn = () => {
    sinInWithGithub()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }




    return (
        <Container >
        <div className='mt-5 pt-5'> 
        <Form   className=' w-75 mx-auto '>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name='email'  placeholder="Enter email" />
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name='password' placeholder="Password" />
    </Form.Group>

  
    <Button variant="primary" type="submit">
      Submit
    </Button> <br/>
    <Form.Text className="text-muted text-success">
      Dont't Have an Account? <Link to="/register">Register</Link>
      </Form.Text>
      <Form.Text className="text-muted">
   
      </Form.Text>
      <Form.Text className="text-muted">
      <br />
      <hr />
      <Button onClick={handleGoogleSignIn}  className='m-2' variant="outline-primary">
        
             <FaGoogle /> Login with Google</Button>
        <Button onClick={handleGithubSignIn} variant="outline-secondary" className='m-2'> <FaGithub></FaGithub> Login with Github</Button>
      </Form.Text>
  </Form>
        </div>
        </Container>
    );
};

export default Login;