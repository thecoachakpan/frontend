import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  CustomerNav,
  Footer,
  NavSpacer,
  ShopNavBar,
} from "../components/common";
import { shoppersRoutes } from "../utils/routes";

const ShopLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || !user || role !== 1) {
      // console.log(isAuthenticated, user, role);
      router.push(shoppersRoutes.LOGIN);
      return;
    }
    //check registration status
    const {
      emailVerified,
      phoneVerified,
      bvnVerified,
      bankVerified,
      employerVeried,
    } = user;
    if (
      !emailVerified ||
      !phoneVerified ||
      !bvnVerified ||
      !bankVerified ||
      !employerVeried
    ) {
      router.push(shoppersRoutes.COMPLETE_REGISTRATION);
      return;
    }
    setIsLoading(false);
  }, [isAuthenticated, role, router, user]);

  //check if completed registration

  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status" size="sm" /> Wait...
      </div>
    );
  }

  return (
    <div className="main-content">
      <ShopNavBar />
      <NavSpacer />
      <CustomerNav />
      {children}
      <Footer />
    </div>
  );
};

export default ShopLayout;
