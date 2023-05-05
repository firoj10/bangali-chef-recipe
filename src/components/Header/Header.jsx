import React, { useContext } from 'react';
import { Button,  Nav, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router-dom';
import img from './../../assets/qqq.png'
import Tippy from '@tippyjs/react';

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

        <h3 className='text-light'> <img style={{ width: '2rem' }} src={img}alt="" /> <span className='font-weight-bolder  '>BD</span>Shef</h3>
        <Navbar.Toggle  className='bg-light text-light' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse   id="responsive-navbar-nav">
          <Nav className='ms-auto'>
   
        
      <h4 className='font-weight-bolder p-2'><NavLink className={({ isActive }) => isActive ? ' text-decoration-none text-light' : ' text-decoration-none text-dark'} to="/">Home</NavLink></h4>
      <h4 className='font-weight-bolder p-2'><NavLink className={({ isActive }) => isActive ? ' text-decoration-none text-light' : 'text-decoration-none text-dark'} to='/blog'>Blog</NavLink></h4>
        
          {user &&   
                    
                   <Tippy className='text-light bg-dark' content={user?.displayName}>
                     <Image className='' style={{width:'50px'}} src={user?.photoURL} roundedCircle />
                   </Tippy>
                    }
                    {
    user ? <>
    <Button className="px-5 fw-semibold fs-4 bg-light text-success"
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




