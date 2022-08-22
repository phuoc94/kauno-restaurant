import { Button, Container, Row, Col } from 'react-bootstrap';
const HeroSection = () => {
  return (
    <section>
      <Container fluid className="hero">
        <Row className="h-100">
          <Col
            lg={6}
            md={8}
            sm={12}
            className="text-center d-flex align-items-center justify-content-center h-100"
          >
            <div className="w-60">
              <h1 className="hero-text">
                Welcome to the Little Vietnamese kitchen
              </h1>
              <button className="button-primary mt-4 text-nowrap py-3">
                <span className="h4 font-300">BOOK A TABLE</span>
              </button>
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
