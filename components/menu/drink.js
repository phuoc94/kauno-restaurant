import { Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import menu from '../../data/menu.json';
import DrinkItem from '../drinkItem';
import Image from 'next/image';
import img from '../../public/assets/menu/2boba.svg';
import bgimg from '../../public/assets/menu/WhiteVector.svg';

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
      <div className="menu-bg-image d-flex justify-content-end align-items-end bg-test ">
        <div className="menu-drink-bg">
          <Image src={bgimg} alt="bg-image" />
        </div>
        <div>
          <Image src={img} alt="bg-image" />
        </div>
      </div>
    </div>
  );
};

export default Drink;
