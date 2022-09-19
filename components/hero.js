import { Button, Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
      <Container fluid className="hero">
        <Row className="h-100">
          <Col
            lg={5}
            md={12}
            className="text-center d-flex align-items-center justify-content-center h-100"
          >
            <Col>
              <Typography variant="h2" component="h1" className="color-primary">
                Tervetuloa pieneen Vietnamilaiseen keittiöön
              </Typography>
              <Link href="/contact-us#reservation" passHref>
                <button className="button-primary text-uppercase mt-4 text-nowrap py-3">
                  <span className="h4 font-300">Varaa pöytä</span>
                </button>
              </Link>
            </Col>
          </Col>
          <Col lg={7} md={12} className="bg-home-hero-food" />
          <Col />
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
