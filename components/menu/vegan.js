import { Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import menu from '../../data/menu.json';
import MenuItem from '../menuItem';

const Vegan = () => {
  const vegans = menu.vegan;
  return (
    <div className="bg-culture">
      <Container className="py-5">
        <Typography
          variant="h3"
          component="h3"
          className="font-weight-bold text-center"
        >
          Vegan menu
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
