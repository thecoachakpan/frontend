import React from "react";
import { Footer, ShopLandingNavBar } from "../components/common";

// eslint-disable-next-line react/prop-types
const ShopLandingLayout = ({ children }) => {
  return (
    <div className="main-content">
      <ShopLandingNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default ShopLandingLayout;
