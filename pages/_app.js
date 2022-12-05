import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/footer";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
