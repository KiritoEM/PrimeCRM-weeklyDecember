import React, { Fragment, ReactNode } from "react";
import Navbar from "./components/Navbar/Navbar";

interface Ichildren {
  children: ReactNode;
}

const Layout: React.FC<Ichildren> = ({ children }): JSX.Element => {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
