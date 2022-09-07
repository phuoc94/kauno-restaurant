import { Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
const MenuItem = ({ item, md, sm }) => {
  return (
    <Col key={item.title} md={md} sm={sm}>
      <Row className="m-2 mt-5 d-flex justify-content-between">
        <Col xs="8">
          <Typography variant="h5" component="h3">
            {item.title}
          </Typography>
        </Col>
        <Col className="text-end" xs="4">
          <Typography variant="h5" component="h3">
            {typeof item.price === 'number'
              ? item.price.toFixed(2)
              : item.price}
          </Typography>
        </Col>
      </Row>
      <Row className="dashed-bottom mx-2">
        <Col>
          <Typography className="py-2">{item.description}</Typography>
        </Col>
      </Row>
    </Col>
  );
};

export default MenuItem;
