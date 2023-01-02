import CustomNavbar from './navbar';
import Footer from './footer';
import FloatFooterBar from './FloatFooterBar';

export default function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      <main>{children}</main>
      <Footer />
      <FloatFooterBar />
    </>
  );
}
