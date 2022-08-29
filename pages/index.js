import Layout from '../components/layout';
import HeroSection from '../components/hero';
import MenuSection from '../components/menu';
import AboutSection from '../components/about';
import Reservation from '../components/reservation';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <Reservation />
    </Layout>
  );
}
