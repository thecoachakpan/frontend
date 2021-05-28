import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BiCart } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import { GiStorkDelivery } from "react-icons/gi";
import styles from "../../styles/business/dashboard.module.css";

const Business = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        <section className={styles.statistics}>
          {/* <Container fluid> */}
          <Row>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: "#f1f1b8" }}>
                    <FaPiggyBank color="#c3c320" />
                  </div>
                  <div className={styles.name}>Wallet Balance</div>
                  <div className={styles.value}>₦ 10000</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div className={styles.icon}>
                    <GiStorkDelivery color="#5663fb" />
                  </div>
                  <div className={styles.name}>Pending Delivery</div>
                  <div className={styles.value}>2</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: "#f7d4d4" }}>
                    <BiCart color="#ff0000" />
                  </div>
                  <div className={styles.name}>Open Orders</div>
                  <div className={styles.value}>3</div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3}>
              <Card className="mb-3 shadow">
                <Card.Body className={styles.box}>
                  <div
                    className={styles.icon}
                    style={{ backgroundColor: "#b3f1b3" }}>
                    <BsCheckCircle color="#008000" />
                  </div>
                  <div className={styles.name}>Completed Orders</div>
                  <div className={styles.value}>5</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* </Container> */}
        </section>
        <h6>Body</h6>
      </div>
      <div className={styles.rightbar}>right bar</div>
    </div>
  );
};

Business.layout = "business";
Business.pagename = "Dashboard";

export default Business;
