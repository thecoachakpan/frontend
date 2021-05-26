import React from "react";
import { AppNavBar, Footer } from "../components/common";
// import AppNavBar from '../components/AppNavBar';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <div className="main-content">
      <AppNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
