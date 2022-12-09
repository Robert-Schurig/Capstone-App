import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/footer";
import {ImageContext} from "../context/ImageContext";

function MyApp({Component, pageProps}) {
  return (
    <>
      <ImageContext.Provider>
        <GlobalStyles />
        <Component {...pageProps} />
        <Footer />
      </ImageContext.Provider>
    </>
  );
}

export default MyApp;
