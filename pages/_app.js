import GlobalStyles from "../styles/GlobalStyles";
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}

export default MyApp;
