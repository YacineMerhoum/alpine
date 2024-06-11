import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/sources-homepage/logo/logo-white.png"
import { Link } from 'react-router-dom';

function navbarAlpine() {
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center font  navbar">
          <Link to={"/"}><Navbar.Brand ><img className="logo" src={Logo}></img></Navbar.Brand></Link>
          <Nav className="mx-auto">
            <Nav.Link className='me-5 text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='mx-5 text-white' href="#features">Features</Nav.Link>
            <Nav.Link className='mx-5 text-white' href="/configuratorpages">Configurateur</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <br />
    </>
  );
}

export default navbarAlpine;
