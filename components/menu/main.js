import { Typography } from '@mui/material';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import menu from '../../data/menu.json';
import MenuItem from '../menuItem';
import img from '../../public/assets/menu/lohiBowl.svg';

const Main = () => {
  const mains = menu.main;
  return (
    <div className="menu-main">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-weight-bold text-center color-primary"
        >
          Main courses
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className="text-center d-none d-lg-block"
        >
          Enjoy our tasty and perfectly cooked dishes
        </Typography>

        <Row>
          <Col lg={6} sm={12}>
            <div className="d-none d-lg-flex ">
              <Image src={img} alt="lohi bowl" />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            {mains.map((item) => (
              <MenuItem key={item.title} item={item} md={12} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
