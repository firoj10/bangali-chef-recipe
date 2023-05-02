import React from 'react';

const SingleFood = ({food}) => {
    const {total_view, others_info,details, thumbnail_url}= food;
    return (
        <div>
               <img variant="top" src={thumbnail_url} />
           <p>{total_view}</p> 
           <p>{details}</p> 
        </div>
    );
};

export default SingleFood;