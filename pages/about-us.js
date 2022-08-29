import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import { Typography } from '@mui/material';
import Reservation from '../components/reservation';

export default function AboutUs() {
  return (
    <Layout>
      <Col className="vh-100 d-flex align-items-center justify-content-center bg-primary">
        <Typography
          variant="h2"
          component="h1"
          className="text-uppercase font-classique-saigon color-white text-center"
        >
          <span className="d-none d-md-block">
            kaUNO <br />
          </span>
          THE LIttLE vIetnamese kItchen
        </Typography>
      </Col>
      <Container>
        <Typography
          variant="h2"
          component="h1"
          className="text-uppercase font-classique-saigon color-primary text-center p-5"
        >
          who we are
        </Typography>
        <Typography variant="h6" component="p" className="text-center py-2">
          Our beloved Kauno, founded in 2014 and based in{' '}
          <span className="font-weight-900 color-d-sienna">Hämeenlina</span>, is
          on a mission to offer Asian cuisine, particularly Vietnamese cuisine,
          to the locals.
        </Typography>
        <Typography variant="h6" component="p" className="text-center py-2">
          We specialize on warming foods and beverages with a touch of Asian
          influences and sophistication that are both healthful and fun to
          enjoy.
        </Typography>
        <Typography variant="h6" component="p" className="text-center py-2">
          Here you are welcomed to dine in or take away.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          className="text-center py-2 pb-5"
        >
          Come and try out our{' '}
          <span className="font-weight-900 color-seal-brown">
            comforting bowl of Pho
          </span>{' '}
          or{' '}
          <span className="font-weight-900 color-primary">
            a refreshing spring roll dish
          </span>
          , or simply{' '}
          <b>
            <span className="font-weight-900 color-copper-red">
              a cup of boba milk tea
            </span>
          </b>
          .
        </Typography>
      </Container>
      <Col className="py-5 bg-culture">
        <Typography
          variant="h2"
          component="h1"
          className="text-uppercase font-classique-saigon color-primary text-center"
        >
          Our values
        </Typography>
        <Container>
          <Row>
            <Col>
              <Typography
                variant="h4"
                component="h4"
                className="text-center p-2"
              >
                Premium Quality
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="text-center p-2"
              >
                We aim at bringing excellent quality food to our customer
              </Typography>
            </Col>
            <Col>
              {' '}
              <Typography
                variant="h4"
                component="h4"
                className="text-center p-2"
              >
                Seasonal Vegetables
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="text-center p-2"
              >
                Fresh, seasonal veggies from Finnish farms are well-loved here
              </Typography>
            </Col>
            <Col>
              {' '}
              <Typography
                variant="h4"
                component="h4"
                className="text-center p-2"
              >
                Fresh Fruit
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="text-center p-2"
              >
                Fresh fruits are used to make wonderful, refreshing drinks that
                will brighten your day
              </Typography>
            </Col>
          </Row>
        </Container>
      </Col>
      <Reservation />
    </Layout>
  );
}
