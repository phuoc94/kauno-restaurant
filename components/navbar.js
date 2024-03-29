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
       <Navbar expand="xl">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand className="row col-8 col-md-5 col-lg-3">
              <Image src={Logo} alt="logo" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="h3 font-300 color-primary text-center">
              <Link href="/" passHref>
                <Nav.Link className="mx-1">Etusivu</Nav.Link>
              </Link>
              <Link href="/menu" passHref>
                <Nav.Link className="mx-1">Menu</Nav.Link>
              </Link>
              <Link href="/about-us" passHref>
                <Nav.Link className="mx-1"> Meistä</Nav.Link>
              </Link>
              <Link href="/contact-us" passHref>
                <Nav.Link className="mx-1 d-xl-none">Ota yhteyttä</Nav.Link>
              </Link>
              <Link href="/contact-us#reservation" passHref>
                <Nav.Link className="mx-1 d-xl-none">Varaa pöytä</Nav.Link>
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
          </Navbar.Collapse>
          <div className="text-center d-none d-xl-block">
            <Link href="/contact-us">
              <button className="button-secondary text-uppercase text-nowrap py-3 p-2 mx-2 button">
                <span className="h4 font-300 text-center">Ota yhteyttä</span>
              </button>
            </Link>
            <Link href="/contact-us#reservation">
              <button className="button-primary text-uppercase text-nowrap py-3 p-2 mx-2 button">
                <span className="h4 font-300 text-center">Varaa pöytä</span>
              </button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
