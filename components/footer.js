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
          <Col className="align-self-center my-2" sm={12} md={6} lg={4}>
            <p className="m-0">
              <span className="font-weight-900">Mon-Tue:</span> 10.00 - 17.30
            </p>
            <p className="m-0">
              <span className="font-weight-900">Wed-Fri:</span> 10.00 - 20.00
            </p>
            <p className="m-0">
              <span className="font-weight-900">Sat:</span> 11.00 - 17.30
            </p>
          </Col>
          <Col className="align-self-center my-2" sm={12} md={6} lg={4}>
            <span className="font-weight-900">
              Hallituskatu 22, 13100 Hämeenlinna
            </span>
            <br />
            <FaPhoneAlt /> 0400415224 <br />
            <MdEmail /> kaunocafe@gmail.com
            <br />
            <AiOutlineFacebook size={26} />
            <AiOutlineInstagram size={26} />
          </Col>
          <Col
            className="d-flex justify-content-center justify-content-lg-end my-4"
            sm={12}
            md={12}
            lg={4}
          >
            <Image src={Logo} alt="logo" width={162} height={162} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
