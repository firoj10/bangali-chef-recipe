import React, { useContext } from 'react';
import { Button, Nav, Image, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import img from './../../assets/qqq.png';
import Tippy from '@tippyjs/react';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.error(error));
  };

  return (
    <Navbar style={{ background: "#854d27" }} variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <img style={{ width: '2rem' }} src={img} alt="" />
          <span className='font-weight-bolder'>BDShef</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <h4 className='font-weight-bolder my-2 mx-3'>
              <NavLink
                className={({ isActive }) => isActive ? 'text-[#3A0000]' : 'text-decoration-none text-white'}
                to="/">Home</NavLink>
            </h4>
            <h4 className='font-weight-bolder my-2 mx-3'>
              <NavLink
                className={({ isActive }) => isActive ? 'style={{color: "#3A0000"}}' : 'text-decoration-none text-white'}
                to='/blog'>Blog</NavLink>
            </h4>
            {user && (
              <Tippy className='text-light bg-dark' content={user?.displayName}>
                <Image className='' style={{ width: '40px', height: '40px' }} src={user?.photoURL} roundedCircle />
              </Tippy>
            )}
            {user ? (
              <Button className="px-5 fw-semibold fs-4 text-success btn-light"
                onClick={handleLogout}>Logout</Button>
            ) : (
              <Link to='/login'>
                <button className='px-5 fw-semibold fs-4 text-white ' style={{ background: "#854d27", border: 'none' }} >Login</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
