import { Typography } from '@mui/material';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import menu from '../../data/menu.json';
import MenuItem from '../menuItem';
import img from '../../public/assets/menu/lohiBowl.svg';

const Starter = () => {
  const starters = menu.starter;
  return (
    <div className="bg-culture starters">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-weight-bold text-center"
        >
          Starters
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className="text-center d-none d-lg-block"
        >
          Start off your dining with a delicious beginning
        </Typography>

        <Row>
          <Col lg={6} sm={12}>
            {starters.map((item) => (
              <MenuItem key={item.title} item={item} md={12} />
            ))}
          </Col>
          <Col lg={6} sm={12} className="d-flex justify-content-end">
            <div className="d-none d-lg-flex ">
              <Image src={img} alt="lohi bowl" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Starter;
