import Layout from '../components/layout';
import HeroSection from '../components/hero';
import MenuSection from '../components/menu';
import AboutSection from '../components/about';
import Reservation from '../components/reservation';

import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kauno</title>
      </Head>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <Reservation />
    </Layout>
  );
}
