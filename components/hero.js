import { Button, Container, Row, Col } from 'react-bootstrap';
const HeroSection = () => {
  return (
    <section>
      <Container fluid className="hero">
        <Row className="h-100">
          <Col md={5} className="text-center d-flex align-items-center">
            <div>
              <h1>Welcome to the Little Vietnamese kitchen</h1>
              <Button variant="success" size="lg">
                BOOK A TABLE
              </Button>
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
