import { Typography, TextField } from '@mui/material';
import { Row, Col, Container } from 'react-bootstrap';

const Form = () => {
  return (
    <div className="bg-culture">
      <Container>
        <Typography
          variant="h2"
          component="h1"
          className="text-uppercase font-classique-saigon color-primary text-center py-5"
        >
          get In touch
        </Typography>

        <Row>
          <Col lg={6} className="p-3">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              placeholder="Phone number"
            />
          </Col>
          <Col lg={6} className="p-3">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              placeholder="Phone number"
            />
          </Col>
          <Col lg={12} className="p-3">
            <TextField
              label="Message"
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={4}
            />
          </Col>
        </Row>
        <Row className="p-5">
          <Col className="d-flex justify-content-center">
            <button className="button-primary text-nowrap py-3">
              <span className="h5 font-300 text-uppercase">send</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form;
