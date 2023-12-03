import React, { Fragment, ReactNode } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
