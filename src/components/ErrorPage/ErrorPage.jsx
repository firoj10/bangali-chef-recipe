import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import o from "./../../assets/err.png"
import { Container, Image } from 'react-bootstrap';

const ErrorPage = () => {
    const { error, status } = useRouteError()
  return (
    
         <Container >
           <div className='mx-auto text-center mt-5 pt-5'>
           <Image style={{width:'300px'}} src={o} />
           
       
           <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
             {error?.message}
           </p>
           <Link to='/' className='btn'>
             Back to homepage
           </Link>
           </div>
         </Container>
      
    );
};

export default ErrorPage;