import Layout from '../components/layout';
import Form from '../components/contact/contact-form';
import ContactAbout from '../components/contact/about';
import Reservation from '../components/reservation';

export default function ContactUs() {
  return (
    <Layout>
      <ContactAbout />
      <Form />
      <Reservation />
    </Layout>
  );
}
