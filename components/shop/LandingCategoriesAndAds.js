import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdPayment } from "react-icons/md";
import { RiCustomerService2Line, RiShoppingBag3Line } from "react-icons/ri";
import styles from "../../styles/shop/LandingCategoriesAndAds.module.css";
import CategoriesList from "./CategoriesList";

const LandingCategoriesAndAds = () => {
  return (
    <div className={styles.main}>
      <section>
        <Container>
          <Row>
            <Col xs={12} md={3} className="d-none d-md-block">
              {/* <MegaMenu /> */}
              <CategoriesList />
            </Col>
            <Col xs={12} md={6}>
              <div className={styles.ads1}>
                <img
                  src="/images/banner.png"
                  className="img-fluid"
                  alt="advert"
                />
              </div>
            </Col>
            <Col xs={12} md={3} className="d-none d-md-block">
              <div className={styles.ads2}>
                <img
                  src="/images/banner2.jpg"
                  className="img-fluid"
                  alt="advert"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={`${styles.features}`}>
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <Link href="/">
                <a>
                  <div className={styles.feature}>
                    <div className={styles.icon}>
                      <RiShoppingBag3Line />
                    </div>
                    <div className={`${styles.text} d-none d-md-block`}>
                      Official Stores
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
            <Col xs={4} md={4}>
              <Link href="/">
                <a>
                  <div className={styles.feature}>
                    <div className={styles.icon}>
                      <MdPayment />
                    </div>
                    <div className={`${styles.text} d-none d-md-block`}>
                      Pay Instalment
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
            <Col xs={4} md={4}>
              <Link href="/">
                <a>
                  <div className={styles.feature}>
                    <div className={styles.icon}>
                      <RiCustomerService2Line />
                    </div>
                    <div className={`${styles.text} d-none d-md-block`}>
                      Customer Care Support
                    </div>
                  </div>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingCategoriesAndAds;
