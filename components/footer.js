import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/stickers.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-5 pb-5rem">
        <Row>
          <Col className="align-self-center my-2" sm={12} md={6} lg={4}>
            <p className="m-0">
              <span className="font-weight-900">Ma-Ti:</span> 10.00 - 17.30
            </p>
            <p className="m-0">
              <span className="font-weight-900">Ke-Pe:</span> 10.00 - 20.00
            </p>
            <p className="m-0">
              <span className="font-weight-900">La:</span> 11.00 - 17.30
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
