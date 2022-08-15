import CustomNavbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      <main>{children}</main>
    </>
  );
}
