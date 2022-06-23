import { Navbar } from "../components/Navbar";
import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />

      <Script src="../buttonScript.js" />
    </>
  );
}

export default MyApp;
