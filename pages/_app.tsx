import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'material-icons/iconfont/material-icons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
