import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState('')

   const handleSubmit = (event) => {
     event.preventDefault();
     const form = event.target
     const email = form.email.value;
     const password = form.password.value;
     const name = form.name.value;
     const photoURL = form.photoURL.value;

     console.log(email, password);

       const handleUpdateProfile = () => {
         const profile = {
           displayName: name,
           photoURL: photoURL,
        
         };
         updateUserProfile(profile)
           .then(() => {})
           .catch((error) => console.error(error));
           
       }; 
         createUser(email, password)
           .then((result) => {
             const user = result.user;
             console.log(user);
             form.reset();
             setError("");
             handleUpdateProfile(name, photoURL);
           })
           .catch((error) => {
             console.error(error);
             setError(error.message);
           });
                     

   };
    return (
        <Container  >
          <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" name="name" placeholder="Enter name" />
           </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>photoURL</Form.Label>
           <Form.Control type="text" name="photoURL" placeholder="Enter your photoURL" />
           </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name="email" 
           placeholder="Enter email" />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control
             type="password"
             name="password"
             placeholder="Password"
           />
         </Form.Group>
         <Button variant="primary" type="submit">
           Register
         </Button>
    
         <p>Already Have an Account <Link to='/login'>Login Now</Link></p>
       </Form>
 
        </Container>
    );
};

export default Register;