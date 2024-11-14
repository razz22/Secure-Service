import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MasterLayout = ({ children }) => {
  return (
    <div>
      {/* header  */}
      <Header />
      {/* main content  */}
      <div>{children}</div>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default MasterLayout;
