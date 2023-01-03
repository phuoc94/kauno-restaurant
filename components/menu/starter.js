import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/urls';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import menu from '../../data/menu.json';
import MenuItem from '../menuItem';
import img from '../../public/assets/menu/starterbg.svg';

const Starter = () => {
  const [starters, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.post(API_URL, {
        query: `
          query {
            starters{
              title
              description
              featured
              price
            }
          }
        `,
      });

      const data = response.data;
      setMenu(data.data.starters);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-culture starters color-primary">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-classique-saigon text-center"
        >
          Alkuruoka
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className="text-center d-none d-lg-block"
        >
          Aloita ruokailusi herkullisella alkuruoalla
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
