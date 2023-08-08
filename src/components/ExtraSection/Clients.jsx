import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import bg1 from "./../../assets/bg-1.png"
import bg2 from "./../../assets/bg-2.png"
import bg3 from "./../../assets/bg-3.png"

const Clients = () => {
    return (
        <Container style={{ paddingTop: '200px' }} className='pt-[100px] mb-5  pb-5 '>

            <h1 className='mt-5 mb-5 pt-5 text-center text-white'> At Your Door or In Your Store</h1>
            <Row className='direction="horizontal pt-5 mt-5 mb-5 mb-5'>
                <Col sm={12} md={6}> <Image style={{ height: '200px' }} src={bg1} roundedCircle /></Col>
                <Col sm={12} md={6}>
                    <h2 className='text-white'>Customize Your Order
                    </h2>
                    <p className='text-white'>Let your tastebuds be your guide! Use our CustomizeDelivered to Your Doorstep meals and 18 ExtrasDelivered to Your Doorstep meals and 18 ExtrasDelivered to Your Doorstep meals and 18 Extras <br />It tool to make your meals feel truly yours</p>

                </Col>
            </Row>

            <Row className='pt-5 mt-5 mb-5 mb-5 ma-auto'>
                <Col sm={12} md={6}><Image style={{ height: '200px' }} src={bg2} roundedCircle /></Col>
                <Col sm={12} md={6}><h2 className='text-white'>Select Your Preferences
                </h2>
                    <p className='text-white'>Every week, choose from over 30 meals and 18 Extras. Don’t need a box this week?Delivered to Your Doorstep meals and 18 ExtrasDelivered to Your Doorstep meals and 18 ExtrasDelivered to Your Doorstep meals and 18 Extras.</p>
                </Col>

            </Row>


            <Row className='direction="horizontal'>
                <Col sm={12} md={6}> <Image style={{ height: '200px' }} src={bg3} roundedCircle /></Col>
                <Col className='pt-4' sm={12} md={6}><h2 className='text-white'>Delivered to Your Doorstep
                </h2>
                    <p className='text-white'>Delivered to Your Doorstep meals and 18 Extras.Delivered to Your Doorstep meals and 18 ExtrasDelivered to Your Doorstep meals and 18 Extras</p>
                </Col>
            </Row>


        </Container>
    );
};

export default Clients;