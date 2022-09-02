import { Container, Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Img from '../../public/assets/contactus/Hero-ContactUs.svg';

const ContactAbout = () => {
  return (
    <Container fluid>
      <Col className="contact-about bg-contact-about-image"></Col>
      <Container>
        <Row className="vh-100 d-flex align-items-center">
          <Col lg={5} className="contact-about-image">
            <Image src={Img} alt="bg-image" />
          </Col>
          <Col lg={7} md={12} className="p-5">
            <Typography
              variant="h3"
              component="h3"
              className="font-classique-saigon text-uppercase color-seal-brown text-center"
            >
              THE LIttle VIetnamese kItchen
            </Typography>

            <Row className="dashed-bottom py-3">
              <Col>
                <Typography variant="h4" component="h3">
                  <span className="font-weight-900">Open Time</span>
                </Typography>
              </Col>
              <Col>
                <Typography variant="h4" component="h3" className="text-end">
                  Monday - Saturday
                </Typography>
              </Col>
            </Row>
            <Row className="dashed-bottom py-3">
              <Col>
                <b>Mon-Tue</b>
                <br />
                10.00 - 17.30
              </Col>
              <Col className="text-center">
                <b>Wed-Fri</b>
                <br />
                10.00 - 20.00
              </Col>
              <Col className="d-flex justify-content-end">
                <span>
                  <b>Sat</b>
                  <br />
                  11.00 - 17.30
                </span>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
                We can be contacted via
                <br /> email{' '}
                <a
                  href="mailto:kaunocafe@gmail.com"
                  className="text-decoration-none"
                >
                  <span className="color-primary font-weight-bold">
                    kaunocafe@gmail.com
                  </span>
                </a>
                <br />
                or telephone on{' '}
                <a href="tel:+358400415224" className="text-decoration-none">
                  <span className="color-primary font-weight-bold">
                    0400415224
                  </span>
                </a>
              </Col>
              <Col>
                We are located at
                <br />
                <a
                  href="https://goo.gl/maps/jS1BLFLHtYHxQuTM8"
                  className="text-decoration-none"
                >
                  <span className="color-primary font-weight-bold">
                    Hallituskatu 22, 13100 Hämeenlinna
                  </span>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactAbout;
