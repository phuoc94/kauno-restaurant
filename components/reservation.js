import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';

import Typography from '@mui/material/Typography';

import Quandoo from './quandoo';

const Reservation = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [people, setPeople] = useState(2);
  const [formValues, setFormValues] = useState({
    email: '',
    phone: '',
    message: '',
  });
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!date || !time || !people) {
      setStatus('error');
      setOpen(true);
      setIsLoading(false);
      return;
    }

    const templateParams = {
      date: `${date.$D}.${date.$M + 1}.${date.$y}`,
      time: `${time.$H}:${time.$m}`,
      people,
      ...formValues,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        () => {
          setStatus('success');
          setOpen(true);
          setIsLoading(false);
        },
        () => {
          setStatus('error');
          setOpen(true);
          setIsLoading(false);
        }
      );

    e.target.reset();
    setFormValues({ email: '', phone: '', message: '' });
    setPeople('');
    setDate(new Date());
    setTime(null);
  };

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
      <Quandoo  />
     {/*
        <Box component="form" onSubmit={sendEmail}>
          <Row>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Col className="col-12 col-md-4 p-2">
                <DatePicker
                  label="Päivämäärä"
                  value={date}
                  onChange={setDate}
                  renderInput={(params) => (
                    <TextField {...params} className="w-100" required disabled={isLoading} />
                  )}
                />
              </Col>
              <Col className="col-12 col-md-4 p-2">
                <TimePicker
                  label="Aika"
                  value={time}
                  ampm={false}
                  onChange={setTime}
                  renderInput={(params) => (
                    <TextField {...params} className="w-100" required disabled={isLoading} />
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
                  label="Henkilöä"
                  onChange={(e) => setPeople(e.target.value)}
                  disabled={isLoading}
                >
                  {[...Array(10).keys()].map((i) => (
                    <MenuItem key={i + 1} value={i + 1}>{`${i + 1} Henkilöä`}</MenuItem>
                  ))}
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
                value={formValues.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </Col>
            <Col className="col-12 col-md-6 p-2">
              <TextField
                fullWidth
                label="Puhelinumero"
                variant="outlined"
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </Col>
            <Col className="col-12 p-2">
              <TextField
                label="Viesti"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <button
                className="button-primary mt-4 text-nowrap py-3"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <CircularProgress size={24} />
                ) : (
                  <span className="h4 text-uppercase font-300">Varaa pöytä</span>
                )}
              </button>
            </Col>
          </Row>
        </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
          {status === 'success' ? (
            'Viestisi on lähetetty. Otamme sinuun yhteyttä mahdollisimman pian.'
          ) : (
            'Jotain meni pieleen. Yritä myöhemmin uudelleen tai ota meihin yhteyttä suoraan.'
          )}
        </Alert>
      </Snackbar> */}
    </Container>
  );
};

export default Reservation;
