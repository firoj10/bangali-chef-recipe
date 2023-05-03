import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
           <Container>
           <Header></Header>
           <div className='bg-light'>
           <Outlet></Outlet>
            <Footer></Footer>
           </div>
           </Container>
        </div>
    );
};

export default Main;