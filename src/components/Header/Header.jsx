import React, { useContext } from 'react';
import { Button, Container, Nav, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


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
        <Navbar.Brand className='text-bold' href="#home">Banglai-Shef-recipe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <Link className='p-2 blockquote' to='/'>Home</Link>
          <Link  className='p-2 blockquote' to='/blog'>Blog</Link>
            
          </Nav>
          {user &&   
                    
                    <Image style={{height:'40px'}} src={user?.photoURL} roundedCircle />
                    }
                    {
    user ? <>
    <Button className="btn btn-xs"
     onClick={handleLogout}>Logout</Button>
    </>  : <Link to='/login'><Button variant="secondary">Login</Button></Link>
  }
        </Navbar.Collapse>
        </Navbar>
      </Container>
     
  
        </div>
    );
};

export default Header;