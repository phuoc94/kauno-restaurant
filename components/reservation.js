import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Reservation = () => {
  return (
    <Container className="my-5">
      <Row className="mb-3">
        <Col className="text-center">
          <h1>Make a Reservation</h1>
          <h5>Get in touch with the restaurant</h5>
        </Col>
      </Row>
      <Form>
        <Row>
          <Form.Group className="col-md-4" controlId="formReservation">
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="col-md-4" controlId="formReservation">
            <Form.Control type="time" />
          </Form.Group>
          <Form.Group className="col-md-4" controlId="formReservation">
            <select className="form-select">
              <option value="1">1</option>
              <option value="2" selected>
                2
              </option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </Form.Group>
          <Form.Group className="col-md-6" controlId="formReservation">
            <Form.Label>Email*: </Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="col-md-6" controlId="formReservation">
            <Form.Label>Phone number:</Form.Label>
            <Form.Control type="text" placeholder="Phone number" />
          </Form.Group>
          <Form.Group className="col-md-12" controlId="formReservation">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write here your special requests :)"
              style={{ height: '100px' }}
            />
          </Form.Group>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center">
            <button className="button-primary mt-4 text-nowrap py-3">
              <span className="h4 font-300">BOOK A TABLE</span>
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default Reservation;
