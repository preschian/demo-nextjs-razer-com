import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

// components
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container-outer">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default MyApp;
