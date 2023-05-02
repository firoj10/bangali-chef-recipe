import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import bg1 from "./../../assets/bg-1.png"
import bg2 from "./../../assets/bg-2.png"
import bg3 from "./../../assets/bg-3.png"

const Clients = () => {
    return (
        <Container className='mt-5 mb-5  pb-5 text-center'>
           
            <h1 className='mt-5 mb-5 pt-5 text-center'> At Your Door or In Your Store</h1>
            <Row className='direction="horizontal pt-5 mt-5 mb-5 mb-5'>
        <Col sm={12} md={6}> <Image style={{height:'200px'}} src={bg1} roundedCircle /></Col>
        <Col sm={12} md={6}>
<h2>Customize Your Order
</h2>
<h4>Let your tastebuds be your guide! Use our Customize It† tool to make your meals feel truly yours..</h4>

        </Col>
      </Row>

            <Row className='pt-5 mt-5 mb-5 mb-5 ma-auto'>
            <Col sm={12} md={6}><Image style={{height:'200px'}} src={bg2} roundedCircle /></Col>
            <Col sm={12} md={6}><h2>Select Your Preferences
</h2>
<h4>Every week, choose from over 30 meals and 18 Extras. Don’t need a box this week?.</h4>
</Col>

      </Row>


            <Row className='direction="horizontal'>
            <Col sm={12} md={6}> <Image style={{height:'200px'}} src={bg3} roundedCircle /></Col>
            <Col className='pt-4' sm={12} md={6}><h2>Delivered to Your Doorstep
</h2>
<h4>Delivered to Your Doorstep</h4>
</Col>
      </Row>
        

        </Container>
    );
};

export default Clients;