import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }) {
  return (
        <AnimatePresence mode="wait">
        <Component {...pageProps} />
        </AnimatePresence>

  ) 
}

export default MyApp
