import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleFood from '../SingleFood/SingleFood';

const FoodDetails = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <h2>Category{categoryNews.length}</h2>}
            {
  categoryNews.map(food=> <SingleFood key={food._id} food={food}></SingleFood>)

            }
        </div>
    );
};

export default FoodDetails;