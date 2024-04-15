import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/urls';
import { Typography } from '@mui/material';
import { Container, Row } from 'react-bootstrap';
import MenuItem from '../menuItem';

const Vegan = () => {
  const [vegans, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.post(API_URL, {
        query: `
          query {
            vegans{
              title
              description
              featured
              price
            }
          }
        `,
      });

      const data = response.data;
      setMenu(data.data.vegans);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-culture">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-classique-saigon text-center color-primary"
        >
          Kasvisruoka
        </Typography>

        <Row>
          {vegans.map((item) => (
            <MenuItem key={item.title} item={item} md={6} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Vegan;
