import React, { useContext } from 'react';
import { Button, Container, Nav, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout = () =>{
    logout()
    .then(()=>{})
    .catch(error=>console.error(error))
}
    return (
    
        <div> 
      <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        {/* <Navbar.Brand  ></Navbar.Brand> */}
        <h2><span className='font-weight-bolder '>BD</span>Shef</h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
   
        
      <h4 className='font-weight-bolder p-3'><NavLink className={({ isActive }) => isActive ? 'text-danger text-decoration-none ' : ' text-decoration-none '} to="/">Home</NavLink></h4>
      <h4 className='font-weight-bolder p-3'><NavLink className={({ isActive }) => isActive ? 'text-danger text-decoration-none ' : 'text-decoration-none '} to='/blog'>Blog</NavLink></h4>
        
          {user &&   
                    
                    <Image className='m-3' style={{width:'40px'}} src={user?.photoURL} roundedCircle />
                    }
                    {
    user ? <>
    <Button className="btn btn-xs p-3 font-weight-bold"
     onClick={handleLogout}>Logout</Button>
    </>  : <Link to='/login'><Button className='p-3 ' >Login</Button></Link>
  }
     
      </Nav>
        </Navbar.Collapse>
        </Navbar>
      </Container>
     
  
        </div>
    );
};

export default Header;




