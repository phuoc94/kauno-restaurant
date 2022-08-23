import { Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import menu from '../data/menu.json';

const MenuSection = () => {
  const main = menu.main;
  return (
    <div className="menu-section menu-bg">
      <Container>
        <Row>
          <Col>
            <div className="section-heading text-center my-5">
              <Typography
                variant="h2"
                component="h2"
                className="font-classique-saigon color-primary"
              >
                Our Menu
              </Typography>
              <div className="line-dec"></div>
            </div>
          </Col>
        </Row>
        <Row>
          {main.map((item, index) => (
            <Col key={item.title} md={6} sm={12}>
              <Row className="m-2">
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
            <button className="button-primary mt-5 text-nowrap py-3">
              <span className="h4 font-300">READ MORE</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MenuSection;
