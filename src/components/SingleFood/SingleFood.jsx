import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

const SingleFood = ({food}) => {
    const {phefpicture, chefname,recipe_name, ingredients,experience,
        Numbersofrecipes,liks,rating,recep_image,published_date,
        cooking_method,description }= food;
    return (
       <div>
        <div className='mt-5 pt-5'>
            <img src={phefpicture} alt=""  style={{ width: '18rem' }}/>
            <p>Chef name <span>{chefname}</span></p>
            <p>Short Bio<span>{description}</span></p>
            <p>Numbers of Recipes<span>{Numbersofrecipes}</span></p>
            <p>Years of Experience<span>{experience}</span></p>

        </div>
         <CardGroup>
        <Card>
          <Card.Img variant="top" src={recep_image.recepe1}  />
          <Card.Body>
            <Card.Title>{recipe_name.res1}</Card.Title>
            <Card.Text>
            <p>ingredients : <span>{ingredients.ingre1}</span></p>
            <p>cooking_method : <span>{cooking_method.cok_met1}</span></p>
            <p>rating: <span>{rating.rat1}</span></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button>Favorite button</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={recep_image.recepe2} />
          <Card.Body>
            <Card.Title>{recipe_name.res2}</Card.Title>
            <Card.Text>
            <p>ingredients: <span>{ingredients.ingre2}</span></p>
            <p>cooking_method: <span>{cooking_method.cok_met2}</span></p>
            <p>rating: <span>{rating.rat1}</span></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button>Favorite button</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={recep_image.recepe3}/>
          <Card.Body>
            <Card.Title>{recipe_name.res3}</Card.Title>
            <Card.Text>
            <p>ingredients: <span>{ingredients.ingre3}</span></p>
            <p>cooking_method: <span>{cooking_method.cok_met3}</span></p>
            <p>rating: <span>{rating.rat1}</span></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button>Favorite button</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
       </div>
    );
};

export default SingleFood;