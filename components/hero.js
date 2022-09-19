import { Button, Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
const HeroSection = () => {
  return (
    <section>
      <Container fluid className="hero bg-home-hero-food">
        <Row className="h-100">
          <Col
            lg={6}
            md={8}
            sm={12}
            className="text-center d-flex align-items-center justify-content-center h-100"
          >
            <Col className="w-60">
              <Typography variant="h2" component="h1" className="color-primary">
                Welcome to the Little Vietnamese kitchen
              </Typography>
              <button className="button-primary mt-4 text-nowrap py-3">
                <span className="h4 font-300">BOOK A TABLE</span>
              </button>
            </Col>
          </Col>
          <Col />
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
