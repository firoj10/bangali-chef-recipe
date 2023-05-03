import React, { useContext } from 'react';
import { Button, Container, Nav, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import img from './../../assets/qqq.png'

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout = () =>{
    logout()
    .then(()=>{})
    .catch(error=>console.error(error))
}
    return (
    
        <div> 
    
      <Navbar collapseOnSelect expand="lg" className='py-4 bg-success  text-light px-3' >
        {/* <Navbar.Brand  ></Navbar.Brand> */}
        <h3 className='text-light'> <img style={{ width: '2rem' }} src={img}alt="" /> <span className='font-weight-bolder  '>BD</span>Shef</h3>
        <Navbar.Toggle  className='bg-light text-light' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse   id="responsive-navbar-nav">
          <Nav className='ms-auto'>
   
        
      <h4 className='font-weight-bolder p-2'><NavLink className={({ isActive }) => isActive ? ' text-decoration-none text-light' : ' text-decoration-none text-dark'} to="/">Home</NavLink></h4>
      <h4 className='font-weight-bolder p-2'><NavLink className={({ isActive }) => isActive ? ' text-decoration-none text-light' : 'text-decoration-none text-dark'} to='/blog'>Blog</NavLink></h4>
        
          {user &&   
                    
                    <Image className='m-3' style={{width:'40px'}} src={user?.photoURL} roundedCircle />
                    }
                    {
    user ? <>
    <Button className="btn btn-xs p-2 fs-4 bg-success  fw-semibold"
     onClick={handleLogout}>Logout</Button>
    </>  : <Link to='/login'><Button className='px-5 fw-semibold fs-4 bg-light text-success' >Login</Button></Link>
  }
     
      </Nav>
        </Navbar.Collapse>
        </Navbar>
    
     
  
        </div>
    );
};

export default Header;




