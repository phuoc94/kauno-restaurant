import React, { useState } from 'react';
import { Typography, TextField, Box } from '@mui/material';
import { Row, Col, Container } from 'react-bootstrap';
import Snackbar from '@mui/material/Snackbar';
import emailjs from 'emailjs-com';
import Alert from '../alert';

const defaultValues = {
  email: '',
  name: '',
  message: '',
};

const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [status, setStatus] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    let templateParams = {
      email: formValues.email,
      name: formValues.name,
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
          setFormValues(defaultValues);
          console.log('contact form submitted', result.text);
        },
        (error) => {
          setStatus('error');
          setOpen(true);
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-culture">
      <Container>
        <Typography
          variant="h2"
          component="h1"
          className="text-uppercase font-classique-saigon color-primary text-center py-5"
        >
          Ota Yhteyttä
        </Typography>
        <Box component="form" onSubmit={sendEmail}>
          <Row>
            <Col lg={6} className="p-3">
              <TextField
                fullWidth
                label="Nimi"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Name"
              />
            </Col>
            <Col lg={6} className="p-3">
              <TextField
                fullWidth
                label="Sähköpostiosoite"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                variant="outlined"
                placeholder="Email"
              />
            </Col>
            <Col lg={12} className="p-3">
              <TextField
                label="Viesti"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                fullWidth
                id="outlined-multiline-static"
                multiline
                rows={4}
              />
            </Col>
          </Row>
          <Row className="p-5">
            <Col className="d-flex justify-content-center">
              <button className="button-primary text-nowrap py-3" type="submit">
                <span className="h5 font-300 text-uppercase">Lähetä</span>
              </button>
            </Col>
          </Row>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
            {status === 'success' ? (
              <span>
                Your message has been sent. We will contact you as soon as
                possible.
              </span>
            ) : (
              <span>
                Something went wrong. Please try again later or contact us
                directly.
              </span>
            )}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default Form;
