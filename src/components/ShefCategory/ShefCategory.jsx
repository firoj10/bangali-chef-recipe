import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShefCategory = ({category}) => {
    const {id, phefpicture, chefname, experience, Numbersofrecipes, liks}= category;
    return (
        <div style={{ width: '18rem' }}className='col'>
          <Card >
        <Card.Img variant="top" src={phefpicture} />
        <Card.Body>
          <Card.Title>{chefname}</Card.Title>
          <Card.Text>
         <p>Experience: <span>{experience}</span></p>
         <p>Numbers of Recipes: <span>{Numbersofrecipes}</span></p>
         <p>Liks: <span>{liks}</span></p>
          </Card.Text>
          
          <Link to={`/category/${id}`} className='text-black text-decoration-none'><Button variant="primary">View Recipes</Button> </Link>
        </Card.Body>
      </Card>
      </div>





    );
};

export default ShefCategory;