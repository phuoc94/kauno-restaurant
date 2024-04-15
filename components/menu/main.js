import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/urls';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import MenuItem from '../menuItem';
import img from '../../public/assets/menu/lohiBowl.svg';

const Main = () => {
  const [mains, setMains] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.post(API_URL, {
        query: `
          query {
            mains{
              title
              description
              featured
              price
            }
          }
        `,
      });

      const data = response.data;
      setMains(data.data.mains);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="menu-main">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-classique-saigon text-center color-primary"
        >
          Pääruoka
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className="text-center d-none d-lg-block"
        >
          Nauti maustasi ja täydellisesti valmistetuista ruoista
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
