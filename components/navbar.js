import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/web-logo.svg';

const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Logo} alt="logo" width={324} height={92} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center w-100 h3 font-300 text-primary">
              <Nav.Link href="#home" className="mx-1">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mx-1">
                Menu
              </Nav.Link>
              <Nav.Link href="#link" className="mx-1">
                About Us
              </Nav.Link>
              <NavDropdown title="EN" id="basic-nav-dropdown" className="mx-1">
                <NavDropdown.Item href="#action/3.2">
                  <span className="h3 font-300">FI</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <span className="h3 font-300">VN</span>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <button className="button-secondary me-2 text-nowrap py-3">
              <span className="h4 font-300">CONTACT US</span>
            </button>
            <button className="button-primary ms-2 text-nowrap py-3">
              <span className="h4 font-300">BOOK A TABLE</span>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
