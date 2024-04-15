import { useEffect, useState } from "react";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Logo from "../public/assets/stickers.svg";
import { API_URL } from "../utils/urls";

const Footer = () => {
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
    <footer className="footer">
      <Container className="pt-5 pb-8rem">
        <Row>
          <Col className="align-self-center my-2" sm={12} md={6} lg={4}>
            {openingHours &&
              openingHours.map((item, index) => (
                <p key={index} className="m-0">
                  <span className="font-weight-900">{item.day}:</span>{" "}
                  {item.openingHour}
                </p>
              ))}
          </Col>
          <Col className="align-self-center my-2" sm={12} md={6} lg={4}>
            <span className="font-weight-900">
              Hallituskatu 22, 13100 Hämeenlinna
            </span>
            <br />
            <FaPhoneAlt /> 0400415224 <br />
            <MdEmail /> kaunocafe@gmail.com
            <br />
            <Link href="https://www.facebook.com/kaunokitchen/">
              <AiOutlineFacebook size={26} role="button" />
            </Link>
            <Link href="https://www.instagram.com/kaunokitchen/">
              <AiOutlineInstagram size={26} role="button" />
            </Link>
          </Col>
          <Col
            className="d-flex justify-content-center justify-content-lg-end my-4"
            sm={12}
            md={12}
            lg={4}>
            <Image src={Logo} alt="logo" width={162} height={162} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

