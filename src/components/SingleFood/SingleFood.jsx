import React, { useState } from 'react';
import { Button, Card, CardGroup, Toast } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
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
        <div className='mt-5 pt-5 p-2'>
            <img src={phefpicture} alt=""  style={{ width: '18rem' }}/>
            <p className='m-0 p-0 fs-5 fw-semibold'><span className='fs-4 px-2 fw-bold'>Chef name :</span>{chefname}</p>
            <p className='m-0 p-0 fs-5 fw-semibold'><span className='fs-4 px-2 fw-bold'>Short Bio: </span> {description}</p>
            <p className='m-0 p-0 fs-5 fw-semibold'><span className='fs-4 px-2 fw-bold'>Numbers of Recipes: </span> {Numbersofrecipes} Items</p>
            <p className='m-0 p-0 fs-5 fw-semibold'><span className='fs-4 px-2 fw-bold'>Years of Experience: </span>{experience}</p>

        </div>
         <CardGroup className='mb-5'>
        <Card className='p-3 '>
          <Card.Img variant="top" style={{height:'180px'}} src={recep_image.recepe1}  />
          <Card.Body>
            <Card.Title className='fs-4'>{recipe_name.res1}</Card.Title>
            <Card.Text>
            <p className='fs-6 px-2 fw-bold'>ingredients : <span className='fs-7 fw-semibold'>{ingredients.ingre1}</span></p>
            <p className='fs-6 px-2 fw-bold'>cooking_method : <span className='fs-7 fw-semibold'>{cooking_method.cok_met1}</span></p>
            <div className='d-flex bottom-0'>
            <Rating className='text-success' 
 
 placeholderRating={rating?.rat2}
 readonly
emptySymbol={<FaRegStar></FaRegStar>} 
placeholderSymbol={<FaStar className="text-warning"></FaStar>}
fullSymbol={<FaStar></FaStar>}> </Rating>
   <p className='fs-6 px-2 fw-bold'><span className='fs-7 fw-semibold'>{rating.rat1}</span></p>
            </div>
         
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button className='fs-5 bg-success' onClick={handleDisable1}disabled={!accepted1}>Favorite button</Button>
          <ToastContainer />
          </Card.Footer>
        </Card>
        <Card className='p-3'>
          <Card.Img variant="top" style={{height:'180px'}} src={recep_image.recepe2} />
          <Card.Body>
            <Card.Title className='fs-4'>{recipe_name.res2}</Card.Title>
            <Card.Text>
            <p className='fs-6 px-2 fw-bold'>ingredients: <span className='fs-7 fw-semibold'>{ingredients.ingre2}</span></p>
            <p className='fs-6 px-2 fw-bold'>cooking_method: <span className='fs-7 fw-semibold'>{cooking_method.cok_met2}</span></p>
            <div className='d-flex bottom-0'>
            <Rating className='text-success' 
 
 placeholderRating={rating?.rat2}
 readonly
emptySymbol={<FaRegStar></FaRegStar>} 
placeholderSymbol={<FaStar className="text-warning"></FaStar>}
fullSymbol={<FaStar></FaStar>}> </Rating>
   <p className='fs-6 px-2 fw-bold'><span className='fs-7 fw-semibold'>{rating.rat2}</span></p>
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button className='fs-5 bg-success'   onClick={handleDisable2}disabled={!accepted2} >Favorite button</Button>
          <ToastContainer />
          </Card.Footer>
        </Card>
        <Card className='p-3'>
          <Card.Img variant="top" style={{height:'180px'}} src={recep_image.recepe3}/>
          <Card.Body>
            <Card.Title className='fs-4'>{recipe_name.res3}</Card.Title>
            <Card.Text>
            <p className='fs-6 px-2 fw-bold'>ingredients: <span className='fs-7 fw-semibold'>{ingredients.ingre3}</span></p>
            <p className='fs-6 px-2 fw-bold'>cooking_method: <span className='fs-7 fw-semibold'>{cooking_method.cok_met3}</span></p>
            <div className='d-flex bottom-0'>
            <Rating className='text-success' 
 
 placeholderRating={rating?.rat2}
 readonly
emptySymbol={<FaRegStar></FaRegStar>} 
placeholderSymbol={<FaStar className="text-warning"></FaStar>}
fullSymbol={<FaStar></FaStar>}> </Rating>
   <p className='fs-6 px-2 fw-bold'><span className='fs-7 fw-semibold'>{rating.rat3}</span></p>
            </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <Button className='fs-5 bg-success'  onClick={handleDisable3}disabled={!accepted3} >Favorite button</Button>
          <ToastContainer />
          </Card.Footer>
        </Card>
      </CardGroup>
       </div>
    );
};

export default SingleFood;