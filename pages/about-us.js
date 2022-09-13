import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import { Typography } from '@mui/material';
import Reservation from '../components/reservation';
import Image from 'next/image';

import Fish from '../public/assets/aboutus/Fish.svg';
import Carrot from '../public/assets/aboutus/Carrot.svg';
import Lime from '../public/assets/aboutus/Lime.svg';
import Boba from '../public/assets/aboutus/Boba.svg';

export default function AboutUs() {
  return (
    <Layout>
      <Col className="vh-100 d-flex align-items-center justify-content-center bg-about-us">
        <Typography
          variant="h2"
          component="h1"
          className="text-uppercase font-classique-saigon color-white text-center"
        >
          the little viet kitchen
        </Typography>
      </Col>
      <Container fluid>
        <Row>
        <Col className='col-lg-2 	d-none d-lg-block'>
        
        </Col>
        <Col className="px-6 wwa-text col-lg-8 col-12">
          <Typography
            variant="h3"
            component="h2"
            className="text-uppercase font-classique-saigon color-primary text-center p-5"
          >
            who we are
          </Typography>
          <Typography variant="h6" component="p" className="text-center py-2">
            Our beloved Kauno, founded in 2014 and based in{' '}
            <span className="font-weight-900 color-d-sienna">Hämeenlina</span>,
            is on a mission to offer Asian cuisine, particularly Vietnamese
            cuisine, to the locals.
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
        </Col>
        <Col className='col-lg-2 	col-12'>
          <Col className='d-flex align-items-end justify-content-end h-100 image'>
          <Image src={Boba} alt="bg-image" />
          </Col>
        </Col>
        </Row>
      </Container>
      <Col className="py-5 bg-culture">
        <Typography
          variant="h3"
          component="h2"
          className="text-uppercase font-classique-saigon color-primary text-center"
        >
          Our values
        </Typography>
        <Container>
          <Row className="mt-3">
            <Col className="d-flex justify-content-center flex-column">
              <Image src={Fish} alt="fish" />
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
            <Col className="d-flex justify-content-center flex-column">
              <Image src={Carrot} alt="carrot" />

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
            <Col className="d-flex justify-content-center flex-column">
              <Image src={Lime} alt="lime" />

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
