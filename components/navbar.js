import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="md">
        <Container>
          <Navbar.Brand href="#home">Kauno</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center w-100">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="EN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">FI</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">VN</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-success mx-2" size="lg">
              CONTACT US
            </Button>
            <Button variant="success mx-2" size="lg">
              BOOK A TABLE
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
