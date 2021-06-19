import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="container-outer"><Component {...pageProps} /></div>
}
export default MyApp
