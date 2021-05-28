import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BusinessSideBar, TopBar } from "../components/business";
import styles from "../styles/business/components/businesslayout.module.css";
import { businessRoutes } from "../utils/routes";

const BusinessLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated, user, role } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated || !user || role !== 2) {
      // console.log(isAuthenticated, user, role);
      router.push(businessRoutes.LOGIN);
      return;
    }
    //check registration status
    const { phoneVerified, bvnVerified, bankVerified, employerVeried } = user;
    if (!phoneVerified || !bvnVerified || !bankVerified || !employerVeried) {
      router.push(businessRoutes.COMPLETE_REGISTRATION);
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

  const name = children.type.pagename;

  return (
    <div className={styles.businesslayout}>
      <BusinessSideBar />
      <div className={styles.content}>
        <TopBar name={name} />
        {children}
      </div>
    </div>
  );
};

export default BusinessLayout;
