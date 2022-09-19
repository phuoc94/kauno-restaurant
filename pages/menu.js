import { Container } from 'react-bootstrap';
import Layout from '../components/layout';
import Starter from '../components/menu/starter';
import Main from '../components/menu/main';
import Vegan from '../components/menu/vegan';
import Drink from '../components/menu/drink';
import Reservation from '../components/reservation';
import Head from 'next/head';

export default function Menu() {
  return (
    <Layout>
      <Head>
        <title>Menu - Kauno</title>
      </Head>
      <Starter />
      <Main />
      <Vegan />
      <Drink />
      <Reservation />
    </Layout>
  );
}
