import { Typography } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import menu from '../data/menu.json';

const MenuSection = () => {
  const main = menu.main;
  return (
    <div className="menu-section">
      <Container>
        <Row>
          <Col>
            <div className="section-heading text-center mt-5">
              <Typography variant="h2" component="h2">
                Our Menu
              </Typography>
              <div className="line-dec"></div>
            </div>
          </Col>
        </Row>
        <Row>
          {main.map((item, index) => (
            <Col key={item.title} md={6} className="px-5 mt-5 h-100">
              <Row>
                <Col>
                  <Typography variant="h5" component="h3">
                    {item.title}
                  </Typography>
                </Col>
                <Col className="text-end">
                  <Typography variant="h5" component="h3">
                    {item.price}
                  </Typography>
                </Col>
              </Row>
              <Row className="mt-2 dashed-bottom">
                <Col>
                  <Typography>{item.description}</Typography>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenuSection;
