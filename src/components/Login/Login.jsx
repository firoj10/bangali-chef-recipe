import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { sinInWithGoogle, sinInWithGithub, singIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('')
  const from = location.state?.from?.pathname || '/';

  const handleSingin = event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)
    setError('');
    if(password.length <6){
       setError('Password must be 6 cherectar longer');
       return ;
   }


    singIn(email, password)
    .then((result) => {
        const loggerSingIn = result.user;
        console.log(loggerSingIn)
      
        setError('')
        form.reset();
          navigate(from ,{replace: true})
     
   
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError('users email or password doesnt match')
      })
}
  const handleGoogleSignIn = () => {
    sinInWithGoogle()
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate(from ,{replace: true})
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
     
      navigate(from ,{replace: true})
    })
    .catch(error=>{
      setError(error)
    })
  }




    return (
        <Container >
        <div className='mt-5 pt-5'> 
        <Form onSubmit={handleSingin}  className=' w-75 mx-auto '>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name='email'  placeholder="Enter email" required/>
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name='password' placeholder="Password" required />
    </Form.Group>

  
    <Button className='bg-success text-light' type="submit">
      Submit
    </Button> <br/>
    <Form.Text className="text-success">
     <h5> Dont't Have an Account? <Link to="/register">Register</Link></h5>
      </Form.Text>
      <Form.Text className="text-muted">
   
      </Form.Text>
      <Form.Text className="text-muted">
      <br />
      <hr />
      <Button onClick={handleGoogleSignIn}  className='m-2 bg-success text-light' variant="outline-primary">
        
             <FaGoogle /> Login with Google</Button>
        <Button onClick={handleGithubSignIn} variant="outline-secondary" className='m-2 bg-success text-light'> <FaGithub></FaGithub> Login with Github</Button>
      </Form.Text>
  </Form>
        </div>
        <div><h4 className='text-danger p-4'>{error}</h4></div>
        </Container>
    );
};

export default Login;