import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import Image from 'next/image';
import Logo from '../public/assets/stickers.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="py-5">
        <Row>
          <Col className="align-self-center">
            <p className="m-0">
              <b>Mon-Tue:</b> 10.00 - 17.30
            </p>
            <p className="m-0">
              <b>Wed-Fri:</b> 10.00 - 20.00
            </p>
            <p className="m-0">
              <b>Sat:</b> 11.00 - 17.30
            </p>
          </Col>
          <Col className="text-center align-self-center">
            <b>Hallituskatu 22, 13100 Hämeenlinna</b> <br />
            <FaPhoneAlt /> 0400415224 <br />
            <MdEmail /> kaunocafe@gmail.com
            <br />
            <AiOutlineFacebook size={26} />
            <AiOutlineInstagram size={26} />
          </Col>
          <Col className="d-flex justify-content-end">
            <Image src={Logo} alt="logo" width={162} height={162} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
