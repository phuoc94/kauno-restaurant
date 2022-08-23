import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <div className="about-section bg-culture">
      <Container className="vh-100 ">
        <Row className="h-100 mt-5">
          <Col md={5} className="bg-about d-none d-md-block" />
          <Col className="text-center d-flex align-items-center">
            <div>
              <Typography
                className="font-classique-saigon text-uppercase color-d-sienna"
                variant="h2"
                component="h2"
              >
                The Little Vietnamese Kitchen
              </Typography>
              <p className="about-text">
                Our beloved Kauno is located at the heart of{' '}
                <span className="color-d-sienna font-weight-bold">
                  Hämeenlinna
                </span>
                . We serve warming dishes with the touch of Asian cultures and
                sophistication. Come and enjoy our{' '}
                <span className="color-seal-brown font-weight-bold font-italic">
                  comforting bowl of Pho
                </span>{' '}
                or{' '}
                <span className="color-primary font-weight-bold font-italic">
                  a refreshing spring roll dish.
                </span>
              </p>
              <button className="button-primary mt-5 text-nowrap py-3">
                <span className="h4 font-300">READ MORE</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutSection;
