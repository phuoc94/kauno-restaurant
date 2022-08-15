import { Container, Form, Row } from 'react-bootstrap';

const Reservation = () => {
  return (
    <Container>
      <h1>Make a Reservation</h1>
      <h5>Get in touch with the restaurant</h5>

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
        </Row>
      </Form>
    </Container>
  );
};
export default Reservation;
