import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShefCategory = ({category}) => {
    const {id, phefpicture, chefname, experience, Numbersofrecipes, liks}= category;
    return (
        <div className='col'>
          <Card >
        <Card.Img variant="top" src={phefpicture} />
        <Card.Body>
          <Card.Title className='fw-bold'>{chefname}</Card.Title>
          <Card.Text>
         <p className=' m-0 fs-6 fw-bold'>Experience: <span className=' fs-7 fw-semibold'>{experience}</span></p>
         <p className=' m-0 fs-6 fw-bold'>Numbers of Recipes: <span className='px-1 fs-7 fw-semibold'>{Numbersofrecipes} Items</span></p>
         <p className=' m-0 fs-6 fw-bold'>Liks: <span className=' fs-7 fw-semibold'>{liks}</span></p>
          </Card.Text>
          
          <Link to={`/category/${id}`} className='text-black text-decoration-none'><Button className=' fs-6 fw-semibold bg-success text-light'>View Recipes</Button> </Link>
        </Card.Body>
      </Card>
      </div>
    );
};

export default ShefCategory;