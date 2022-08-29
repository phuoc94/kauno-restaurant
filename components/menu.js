import { Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import menu from '../data/menu.json';
import Link from 'next/link';

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
                Our Menu
              </Typography>
            </Col>
          </Col>
        </Row>
        <Row>
          {main.map((item, index) => (
            <Col key={item.title} md={6} sm={12}>
              <Row className="m-2 mt-5">
                <Col>
                  <Typography variant="h5" component="h3" className="py-2">
                    {item.title}
                  </Typography>
                </Col>
                <Col className="text-end">
                  <Typography variant="h5" component="h3">
                    {item.price}
                  </Typography>
                </Col>
              </Row>
              <Row className="dashed-bottom mh-80 mx-2">
                <Col>
                  <Typography>{item.description}</Typography>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Link href="/menu">
              <button className="button-primary mt-5 text-nowrap py-3">
                <span className="h5 font-300">READ MORE</span>
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuSection;
