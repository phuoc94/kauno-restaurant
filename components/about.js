import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <div className="about-section bg-culture">
      <Container className="vh-100">
        <Row className="h-100 mt-5">
          <Col md={5} className="bg-about d-none d-md-block" />
          <Col className="text-center d-flex align-items-center">
            <Col>
              <Typography
                className="font-classique-saigon text-uppercase color-d-sienna"
                variant="h3"
                component="h2"
              >
                The Little Vietnamese Kitchen
              </Typography>
              <p className="about-text mt-3">
                Rakas Kaunomme sijaitsee{' '}
                <span className="color-d-sienna font-weight-bold">
                  Hämeenlinnan keskustassa.
                </span>
                Tarjoamme lämmittäviä ruokia aasialaisten kulttuurien ja
                hienostuneisuuden kanssa. Tule nauttimaan lohduttavasta{' '}
                <span className="color-seal-brown font-weight-bold font-italic">
                  Pho-kulhostamme
                </span>{' '}
                Tai{' '}
                <span className="color-primary font-weight-bold font-italic">
                  virkistävästä kevätrullaruoasta.
                </span>
              </p>
              <Link href="/about-us">
                <button className="button-primary text-uppercase mt-5 text-nowrap py-3">
                  <span className="h5 font-300">lue lisää</span>
                </button>
              </Link>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
