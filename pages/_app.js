import '../styles/globals.css';
import '../styles/overwrite.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../components/theme';
function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SSRProvider>
  );
}

export default MyApp;
