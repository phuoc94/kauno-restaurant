import { Row, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
const DrinkItem = ({ item, md, sm }) => {
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
      <Row className="dashed-bottom-cream mx-2">
        <Col>
          <Typography className="py-2">{item.description}</Typography>
        </Col>
        <Col xs="auto" className="text-right">
          <button className="button-secondary text-uppercase text-nowrap mb-3">
            <span
              className="button"
              data-glf-cuid="1f9b655f-fd45-4b5d-9cb4-30d6d24fb65d"
              data-glf-ruid="bd207f57-4862-4324-9bd5-b695ce16c038"
            >
              Tilaa
            </span>
          </button>
        </Col>
      </Row>
    </Col>
  );
};

export default DrinkItem;
