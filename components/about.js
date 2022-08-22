import { Container, Row, Col, Button } from 'react-bootstrap';
import { Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Container fluid className="vh-100 bg-culture">
      <Row className="h-100 mt-5">
        <Col md={5} />
        <Col className="text-center d-flex align-items-center">
          <div>
            <h1>The lIttle VIetnamese KItchen</h1>
            <p>
              Our beloved Kauno is located at the heart of Hämeenlinna. We serve
              warming dishes with the touch of Asian cultures and
              sophistication. Come and enjoy our comforting bowl of Pho or a
              refreshing spring roll dish.
            </p>
            <Button variant="success" size="lg">
              READ MORE
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
