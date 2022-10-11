import { Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import menu from '../data/menu.json';
import Link from 'next/link';
import MenuItem from './menuItem';

const MenuSection = () => {
  const main = menu.main;
  return (
    <div className="menu-section menu-bg">
      <Container>
        <Row>
          <Col>
            <Col className="section-heading text-center mt-5">
              <Typography
                variant="h3"
                component="h2"
                className="font-classique-saigon color-primary"
              >
                Menu
              </Typography>
            </Col>
          </Col>
        </Row>
        <Row>
          {main.map((item, index) => (
            <MenuItem key={index} item={item} md={6} sm={12} />
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Link href="/menu">
              <button className="button-primary text-uppercase mt-5 text-nowrap py-3">
                <span className="h5 font-300">lue lisää</span>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuSection;
