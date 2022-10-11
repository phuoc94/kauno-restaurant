import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from './alert';
import emailjs from 'emailjs-com';
import { MdHomeWork } from 'react-icons/md';

const defaultValues = {
  date: new Date(),
  email: '',
  phone: '',
  message: '',
};

const Reservation = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [people, setPeople] = useState('');
  const [formValues, setFormValues] = useState(defaultValues);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  function sendEmail(e) {
    e.preventDefault();
    const today = new Date();
    let templateParams = {
      date: !date.getDate()
        ? `${date.$D}.${date.$M + 1}.${date.$y}`
        : `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`,
      time: `${time.$H}:${time.$m}`,
      people,
      email: formValues.email,
      phone: formValues.phone,
      message: formValues.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          setStatus('success');
          setOpen(true);

          console.log('contact form submitted', result.text);
        },
        (error) => {
          setStatus('error');
          setOpen(true);
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Container className="py-5" id="reservation">
      <Row className="mb-3">
        <Col className="text-center">
          <Typography
            variant="h3"
            component="h3"
            className="font-classique-saigon text-uppercase color-primary"
          >
            Varaa pöytä
          </Typography>
          <Typography variant="h5" component="h3">
            Ota yhteyttä ravintolaan
          </Typography>
        </Col>
      </Row>
      {status === 'success' ? (
        <Box className="rsv-box d-flex justify-content-center align-items-center">
          <Typography variant="h5" component="h3">
            Viestisi on lähetetty. Otamme sinuun yhteyttä mahdollisimman pian.
          </Typography>
        </Box>
      ) : (
        <Box component="form" onSubmit={sendEmail}>
          <Row>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Col className="col-12 col-md-4 p-2">
                <DatePicker
                  label="Päivämäärä"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} className="w-100" required />
                  )}
                />
              </Col>
              <Col className="col-12 col-md-4 p-2">
                <TimePicker
                  label="Aika"
                  value={time}
                  ampm={false}
                  onChange={(newValue) => {
                    setTime(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} className="w-100" required />
                  )}
                />
              </Col>
            </LocalizationProvider>
            <Col className="col-12 col-md-4 p-2">
              <FormControl fullWidth>
                <InputLabel id="people-select-label">Henkilöä</InputLabel>
                <Select
                  labelId="people-select-label"
                  id="people-select"
                  value={people}
                  label="People"
                  name="people"
                  onChange={(e) => {
                    setPeople(e.target.value);
                  }}
                  required
                >
                  <MenuItem value={1}>1 Henkilöä</MenuItem>
                  <MenuItem value={2}>2 Henkilöä</MenuItem>
                  <MenuItem value={3}>3 Henkilöä</MenuItem>
                  <MenuItem value={4}>4 Henkilöä</MenuItem>
                  <MenuItem value={5}>5 Henkilöä</MenuItem>
                  <MenuItem value={6}>6 Henkilöä</MenuItem>
                  <MenuItem value={7}>7 Henkilöä</MenuItem>
                  <MenuItem value={8}>8 Henkilöä</MenuItem>
                  <MenuItem value={9}>9 Henkilöä</MenuItem>
                  <MenuItem value={10}>10 Henkilöä</MenuItem>
                </Select>
              </FormControl>
            </Col>
            <Col className="col-12 col-md-6 p-2">
              <TextField
                fullWidth
                label="Sähköpostiosoite"
                variant="outlined"
                type="email"
                name="email"
                value={formValues.name}
                onChange={handleInputChange}
                required
              />
            </Col>
            <Col className="col-12 col-md-6 p-2">
              <TextField
                fullWidth
                label="Puhelinumero"
                variant="outlined"
                placeholder="Puhelinumero"
                type="tel"
                name="phone"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Col>
            <Col className="col-12 p-2">
              <TextField
                label="Viesti"
                fullWidth
                id="outlined-multiline-static"
                multiline
                placeholder="Kirjoita tähän erityistoiveesi :)"
                rows={4}
                name="message"
                value={formValues.name}
                onChange={handleInputChange}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <button
                className="button-primary mt-4 text-nowrap py-3"
                type="submit"
              >
                <span className="h4 text-uppercase font-300">Varaa pöytä</span>
              </button>
            </Col>
          </Row>
        </Box>
      )}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {status === 'success' ? (
            <span>
              Viestisi on lähetetty. Otamme sinuun yhteyttä mahdollisimman pian.
            </span>
          ) : (
            <span>
              Jotain meni pieleen. Yritä myöhemmin uudelleen tai ota meihin
              yhteyttä suoraan.
            </span>
          )}
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default Reservation;
