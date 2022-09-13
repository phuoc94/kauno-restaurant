import { Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import menu from '../../data/menu.json';
import MenuItem from '../menuItem';

const Drink = () => {
  const drinks = menu.drink;
  return (
    <div className="footer">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-weight-bold text-center"
        >
          Deserts - Drinks
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className="text-center d-none d-lg-block"
        >
          Here are our refreshing drinks and deserts
        </Typography>

        <Row>
          {drinks.map((item) => (
            <MenuItem key={item.title} item={item} md={6} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Drink;
