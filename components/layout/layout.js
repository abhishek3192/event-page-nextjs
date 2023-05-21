import React from "react";
import Header from "./MainHeader/main-header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
