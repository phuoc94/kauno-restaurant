import { useState } from 'react';

import { Container, Form, Row, Col } from 'react-bootstrap';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Reservation = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [people, setPeople] = useState('');

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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Col className="col-12 col-md-4 p-2">
              <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} className="w-100" />
                )}
              />
            </Col>
            <Col className="col-12 col-md-4 p-2">
              <TimePicker
                label="Time"
                value={time}
                ampm={false}
                onChange={(newValue) => {
                  setTime(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} className="w-100" />
                )}
              />
            </Col>
          </LocalizationProvider>
          <Col className="col-12 col-md-4 p-2">
            <FormControl fullWidth>
              <InputLabel id="people-select-label">People</InputLabel>
              <Select
                labelId="people-select-label"
                id="people-select"
                value={people}
                label="People"
                onChange={(e) => {
                  setPeople(e.target.value);
                }}
              >
                <MenuItem value={1}>1 people</MenuItem>
                <MenuItem value={2}>2 people</MenuItem>
                <MenuItem value={3}>3 people</MenuItem>
                <MenuItem value={4}>4 people</MenuItem>
                <MenuItem value={5}>5 people</MenuItem>
                <MenuItem value={6}>6 people</MenuItem>
                <MenuItem value={7}>7 people</MenuItem>
                <MenuItem value={8}>8 people</MenuItem>
                <MenuItem value={9}>9 people</MenuItem>
                <MenuItem value={10}>10 people</MenuItem>
              </Select>
            </FormControl>
          </Col>
          <Col className="col-12 col-md-6 p-2">
            <TextField fullWidth label="Email" variant="outlined" />
          </Col>
          <Col className="col-12 col-md-6 p-2" controlId="formReservation">
            <TextField
              fullWidth
              label="Phone number"
              variant="outlined"
              placeholder="Phone number"
            />
          </Col>
          <Col className="col-12 p-2" controlId="formReservation">
            <TextField
              label="Message"
              fullWidth
              id="outlined-multiline-static"
              multiline
              placeholder="Write here your special requests :)"
              rows={4}
            />
          </Col>
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
