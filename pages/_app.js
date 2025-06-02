import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";

import "@/styles/globals.css";

// Font Awesome Imports 
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
