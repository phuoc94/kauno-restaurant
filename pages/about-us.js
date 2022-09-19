import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/layout';
import { Typography } from '@mui/material';
import Reservation from '../components/reservation';
import Image from 'next/image';

import Fish from '../public/assets/aboutus/Fish.svg';
import Carrot from '../public/assets/aboutus/Carrot.svg';
import Lime from '../public/assets/aboutus/Lime.svg';
import Boba from '../public/assets/aboutus/Boba.svg';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>Meistä - Kauno</title>
      </Head>
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
          <Col className="col-lg-2 	d-none d-lg-block"></Col>
          <Col className="px-6 wwa-text col-lg-8 col-12">
            <Typography
              variant="h3"
              component="h2"
              className="text-uppercase font-classique-saigon color-primary text-center p-5"
            >
              who we are
            </Typography>
            <Typography variant="h6" component="p" className="text-center py-2">
              Vuonna 2014 perustettu ja{' '}
              <span className="font-weight-900 color-d-sienna">
                Hämeenlinnassa
              </span>
              , toimiva rakas Kaunomme missio on tajota aasialaista, erityisesti
              Vietnamilaista ruokaa paikallisille.
            </Typography>
            <Typography variant="h6" component="p" className="text-center py-2">
              Olemme erikoistuneet lämmittäviin ruokiin ja juomiin, joissa on
              aasialaisia vaikutteita ja hienostuneisuutta, jotka ovat sekä
              terveellisiä että hauskoja nauttia.
            </Typography>
            <Typography variant="h6" component="p" className="text-center py-2">
              Tänne olet tervetullut ruokailemaan tai mukaan.
            </Typography>
            <Typography
              variant="h6"
              component="p"
              className="text-center py-2 pb-5"
            >
              Tule kokeilemaan{' '}
              <span className="font-weight-900 color-seal-brown">
                ohdullista Pho-kulhoamme
              </span>{' '}
              tai{' '}
              <span className="font-weight-900 color-primary">
                virkistävää kevätrullaruokaa
              </span>
              tai yksinkertaisesti{' '}
              <b>
                <span className="font-weight-900 color-copper-red">
                  kupillista bobamaitoteetä.
                </span>
              </b>
              .
            </Typography>
          </Col>
          <Col className="col-lg-2 	col-12">
            <Col className="d-flex align-items-end justify-content-end h-100 image">
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
            <Col className="d-flex justify-content-center flex-column col-lg-4 col-12">
              <Image src={Fish} alt="fish" />
              <Typography
                variant="h4"
                component="h4"
                className="text-center p-2"
              >
                Ykköslaatua
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="text-center p-2"
              >
                Tavoitteenamme on tuoda asiakkaillemme laadukasta ruokaa.
              </Typography>
            </Col>
            <Col className="d-flex justify-content-center flex-column col-lg-4 col-12">
              <Image src={Carrot} alt="carrot" />

              <Typography
                variant="h4"
                component="h4"
                className="text-center p-2"
              >
                Kauden Vihannekset
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="text-center p-2"
              >
                Tuoreet, sesongin kasvikset suomalaisilta maatiloilta ovat
                täällä suosittuja.
              </Typography>
            </Col>
            <Col className="d-flex justify-content-center flex-column col-lg-4 col-12">
              <Image src={Lime} alt="lime" />

              <Typography
                variant="h4"
                component="h4"
                className="text-center p-2"
              >
                Tuore hedelmä
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className="text-center p-2"
              >
                Tuoreista hedelmistä tehdään upeita, virkistäviä juomia, jotka
                piristävät päivääsi.
              </Typography>
            </Col>
          </Row>
        </Container>
      </Col>
      <Reservation />
    </Layout>
  );
}
