import Layout from '../components/layout';
import Form from '../components/contact/contact-form';
import ContactAbout from '../components/contact/about';
import Reservation from '../components/reservation';
import Head from 'next/head';

export default function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Ota yhteyttä - Kauno</title>
      </Head>
      <ContactAbout />
      <Form />
      <Reservation />
    </Layout>
  );
}
