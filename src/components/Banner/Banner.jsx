import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner from './../../assets/gg.jpg'

const Banner = () => {
    return (
        <div className='pt-20'>
            <Container>
            <Row className='pt-5'>
                    <Col lg={6}>
<div className='pt-5 mt-5'>
<h1 className='pt-20 text-success'>Bangladeshi Top Food Vloggers and Influencers</h1> 
<p className='fw-semibold'>Shef is part of a growing movement to build a more inclusive food system for all. We are proud to support and champion advocacy, efforts to expand home cooking laws across the country so that talented cooks everywhere can earn a meaningful income from their own kitchens.
In the three years since we delivered our very first order, we have now expanded to serve more, than 70 million people</p>                  
</div>
</Col>  
<Col lg={6}>
                    <Image src={banner} thumbnail />
                    </Col>   
                </Row>
            </Container>
        </div>
    );
};

export default Banner;