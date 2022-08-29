import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../public/assets/web-logo.svg';
import Link from 'next/link';

const CustomNavbar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand className="row col-8 col-md-5 col-lg-3">
              <Image src={Logo} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center w-100 h3 font-300 color-primary">
              <Link href="/" passHref>
                <Nav.Link className="mx-1">Home</Nav.Link>
              </Link>
              <Link href="/menu" passHref>
                <Nav.Link className="mx-1">Menu</Nav.Link>
              </Link>
              <Link href="/about-us" passHref>
                <Nav.Link className="mx-1">About Us</Nav.Link>
              </Link>
              {/*
              <NavDropdown title="EN" id="basic-nav-dropdown" className="mx-1">
                <NavDropdown.Item href="#action/3.2">
                  <span className="h3 font-300">FI</span>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  <span className="h3 font-300">VN</span>
                </NavDropdown.Item>
              </NavDropdown>
  */}
            </Nav>
            <Link href="/contact-us">
              <button className="button-secondary me-2 text-nowrap py-3">
                <span className="h4 font-300">CONTACT US</span>
              </button>
            </Link>
            <Link href="/contact-us#book-a-table">
              <button className="button-primary ms-2 text-nowrap py-3">
                <span className="h4 font-300">BOOK A TABLE</span>
              </button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
