import React, { useState } from 'react';
import { Button, Card, CardGroup, Toast } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const SingleFood = ({food}) => {

  const [accepted1, setAccepted1] = useState(true);
  const [accepted2, setAccepted2] = useState(true);
  const [accepted3, setAccepted3] = useState(true);
    const {phefpicture, chefname,recipe_name, ingredients,experience,
        Numbersofrecipes,liks,rating,recep_image,published_date,
        cooking_method,description }= food;
 const handleDisable1 = ()=>{
  toast("added fevorite");
  setAccepted1(false)

 }
 const handleDisable2 = ()=>{
  
  setAccepted2(false)
toast("added fevorite");
 
 }
 const handleDisable3 = ()=>{

  setAccepted3(false)
  toast("added fevorite");

 }
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
          <Card.Img variant="top" style={{height:'180px'}} src={recep_image.recepe1}  />
          <Card.Body>
            <Card.Title>{recipe_name.res1}</Card.Title>
            <Card.Text>
            <p>ingredients : <span>{ingredients.ingre1}</span></p>
            <p>cooking_method : <span>{cooking_method.cok_met1}</span></p>
            <p>rating: <span>{rating.rat1}</span></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button onClick={handleDisable1}disabled={!accepted1}>Favorite button</Button>
          <ToastContainer />
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" style={{height:'180px'}} src={recep_image.recepe2} />
          <Card.Body>
            <Card.Title>{recipe_name.res2}</Card.Title>
            <Card.Text>
            <p>ingredients: <span>{ingredients.ingre2}</span></p>
            <p>cooking_method: <span>{cooking_method.cok_met2}</span></p>
            <p>rating: <span>{rating.rat1}</span></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button  onClick={handleDisable2}disabled={!accepted2} >Favorite button</Button>
          <ToastContainer />
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" style={{height:'180px'}} src={recep_image.recepe3}/>
          <Card.Body>
            <Card.Title>{recipe_name.res3}</Card.Title>
            <Card.Text>
            <p>ingredients: <span>{ingredients.ingre3}</span></p>
            <p>cooking_method: <span>{cooking_method.cok_met3}</span></p>
            <p>rating: <span>{rating.rat1}</span></p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button onClick={handleDisable3}disabled={!accepted3} >Favorite button</Button>
          <ToastContainer />
          </Card.Footer>
        </Card>
      </CardGroup>
       </div>
    );
};

export default SingleFood;