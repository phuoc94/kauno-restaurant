import { useEffect, useState } from "react";

import axios from "axios";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import { Typography } from "@mui/material";

import Img from "../../public/assets/contactus/Hero-ContactUs.svg";
import { API_URL } from "../../utils/urls";

const ContactAbout = () => {
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    getOpeningHours();
  }, []);

  async function getOpeningHours() {
    try {
      const response = await axios.post(API_URL, {
        query: `
          query {
            openingTimes(orderBy: weekdayNumber_ASC) {
              weekdayNumber
              day
              openingHour
            }
          }
        `,
      });

      const data = response.data;
      setOpeningHours(data.data.openingTimes);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container fluid>
      <Col className="contact-about bg-contact-about-image"></Col>
      <Container>
        <Row className="vh-100 d-flex align-items-center">
          <Col lg={5} className="contact-about-image">
            <Image src={Img} alt="bg-image" priority />
          </Col>
          <Col lg={7} md={12} className="p-5 mt-170">
            <Typography
              variant="h3"
              component="h3"
              className="font-classique-saigon color-seal-brown text-center font-weight-700 ">
              The Little Viet Kitchen
            </Typography>

            <Row className="dashed-bottom py-3">
              <Col>
                <Typography
                  variant="h5"
                  component="h3"
                  className="d-flex justify-content-between">
                  <span className="font-weight-bold">Aukioloaika</span>
                </Typography>
              </Col>
            </Row>
            <Row className="dashed-bottom py-3">
              {openingHours &&
                openingHours.map((item, index) => (
                  <Col key={index} className="d-flex justify-content-between">
                    <span className="font-weight-bold">{item.day}</span>
                    <span>{item.openingHour}</span>
                  </Col>
                ))}
            </Row>
            <Row className="py-3">
              <Col>
                Meihin saa yhteyttä sähköpostitse
                <br />
                <a
                  href="mailto:kaunocafe@gmail.com"
                  className="text-decoration-none">
                  <span className="color-primary font-weight-bold">
                    kaunocafe@gmail.com
                  </span>
                </a>
                <br />
                tai puhelimitse{" "}
                <a href="tel:+358400415224" className="text-decoration-none">
                  <span className="color-primary font-weight-bold">
                    0400415224
                  </span>
                </a>
              </Col>
              <Col>
                Sijaitsemme osoitteessa
                <br />
                <a
                  href="https://goo.gl/maps/jS1BLFLHtYHxQuTM8"
                  className="text-decoration-none">
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

