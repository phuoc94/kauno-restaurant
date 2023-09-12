import { Button, Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
      <Container fluid className="hero">
        <Row className="h-100">
          <Col className="text-center d-flex align-items-center justify-content-center h-100">
            <Col style={{ maxWidth: '580px' }}>
              <h1 className="color-primary display-2 font-classique-saigon">
                Tervetuloa pieneen Vietnamilaiseen keittiöön
              </h1>
              <Link href="/contact-us#reservation" passHref>
                <button className="button-primary text-uppercase mt-4 text-nowrap py-3">
                  <span className="h4 font-300">Varaa pöytä</span>
                </button>
              </Link>
            </Col>
          </Col>
          <Col className="bg-home-hero-food d-none d-lg-flex" />
          <Col className="d-none d-lg-flex" />
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
