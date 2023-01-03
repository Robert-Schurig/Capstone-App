import GlobalStyles from "../styles/GlobalStyles";

import {ImageContextProvider} from "../components/ImageContext";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <ImageContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ImageContextProvider>
    </>
  );
}

export default MyApp;
