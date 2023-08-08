import React from 'react';
import { Button, Container } from 'react-bootstrap';

const FoodQuality = () => {
    return (
    <Container className='text-center pt-5 pb-5 pt-5 pb-5'>
        <h3 className='text-white'>Serving Quality</h3>
        <h1 className='fw-bold p-3 text-white'>We At G.Rest Are Serving Our Costomers  For Over A Decade.</h1>
        <p className='fw-semebold text-white fs-5'>Restaurants, food delivery services, catering firms and many more food and beverage companies collaborate with food vloggers to 
            increase brand awareness and sales. Businesses frequently engage influencers or prominent vloggers in the Customers frequently form bonds with the influencers they give closer attention to, which influences their purchasing decisions. Food vloggers adopt a number of business and marketing strategies to help businesses increase traffic.</p>
            <div>
                <Button className='m-2 fw-semebold fs-4 '>Red More</Button>
                <Button className='m-2 fw-semebold fs-4 '>Contact Us</Button>
            </div>
    </Container>
    );
};

export default FoodQuality;