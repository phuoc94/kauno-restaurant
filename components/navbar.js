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
        <Container className="d-flex">
          <Navbar.Brand as={Link} href="/">
            <Image src={Logo} alt="logo" width={324} height={92} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="h3 font-300 color-primary text-center">
              <Nav.Link as={Link} href="/" className="mx-1">
                Etusivu
              </Nav.Link>
              <Nav.Link as={Link} href="/menu" className="mx-1">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} href="/about-us" className="mx-1">
                Meistä
              </Nav.Link>
              <Nav.Link as={Link} href="/contact-us" className="mx-1 d-xl-none">
                Ota yhteyttä
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/contact-us#reservation"
                className="mx-1 d-xl-none"
              >
                Varaa pöytä
              </Nav.Link>
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
