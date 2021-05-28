import React from "react";
import { Container } from "react-bootstrap";
import OrderCard from "../../../components/customer/OrderCard";
import styles from "../../../styles/shop/customer/pending.module.css";

const Pending = () => {
  return (
    <div className={styles.pending}>
      <section className={styles.header}>
        <Container>
          <h1>Pending Orders</h1>
          <p>Overview of your pending orders</p>
        </Container>
      </section>
      <section className="mt-3">
        <Container>
          <div className="d-flex flex-wrap">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </Container>
      </section>
    </div>
  );
};

Pending.layout = "customer";

export default Pending;
