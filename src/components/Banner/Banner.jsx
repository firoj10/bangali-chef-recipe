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
<h2 className='pt-20'>Bangladeshi Top Food Vloggers and Influencers</h2> 
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt ea soluta molestias. Vel sit cum dolorum magnam nihil? Quibusdam dolor rem, quae porro sint animi placeat quam laborum eveniet optio nihil deserunt amet consequatur corrupti quasi dolore accusantium illum dignissimos temporibus alias cumque! Quam exercitationem delectus possimus aliquam architecto. Sint autem harum consequuntur impedit ipsum iusto numquam ea blanditiis?</p> 
                  
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