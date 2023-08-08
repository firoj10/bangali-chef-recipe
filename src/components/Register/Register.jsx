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
     setError('');
      if(password.length <6){
         setError('Password must be 6 cherectar longer');
         return ;
     }
   

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
          <Form onSubmit={handleSubmit} className=' w-75 mx-auto pt-5 '>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" name="name" placeholder="Enter name" required />
           </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>photoURL</Form.Label>
           <Form.Control type="text" name="photoURL" placeholder="Enter your photoURL" required/>
           </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name="email" 
           placeholder="Enter email" required />
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control
             type="password"
             name="password"
             placeholder="Password"
             required/>
         </Form.Group>
         <Button  className='m-2 ' variant="primary" type="submit">
           Register
         </Button>
    
         <h4 className='text-primary'>Already Have an Account <Link to='/login'>Login Now</Link></h4>
       </Form>
 <div><p className='text-danger'>{error}</p></div>
        </Container>
    );
};

export default Register;