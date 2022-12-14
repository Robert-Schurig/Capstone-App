import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/Footer";
import {ImageContextProvider} from "../components/ImageContext";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <ImageContextProvider>
        <Component {...pageProps} />
        <Footer />
      </ImageContextProvider>
    </>
  );
}

export default MyApp;
