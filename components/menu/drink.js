import { Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import menu from '../../data/menu.json';
import DrinkItem from '../drinkItem';

const Drink = () => {
  const drinks = menu.drink;
  return (
    <div className="footer">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-classique-saigon text-center"
        >
          Jälkiruoat – Juomat
        </Typography>
        <Typography
          variant="h5"
          component="h4"
          className="text-center d-none d-lg-block"
        >
          Tässä ovat virkistävät juomamme ja jälkiruoamme
        </Typography>

        <Row>
          {drinks.map((item) => (
            <DrinkItem key={item.title} item={item} md={6} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Drink;
