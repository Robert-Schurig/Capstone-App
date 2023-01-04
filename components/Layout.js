import Header from "./Header";
import Footer from "./Footer";
import {useRouter} from "next/router";

export default function Layout({children}) {
  const {pathname} = useRouter();

  return (
    <>
      {pathname === "/" ||
      pathname === "/login" ||
      pathname === "/register" ? null : (
        <Header />
      )}
      <div>{children}</div>
      {pathname === "/" ||
      pathname === "/login" ||
      pathname === "/register" ? null : (
        <Footer />
      )}
    </>
  );
}
