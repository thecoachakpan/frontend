import React from "react";
import { Container } from "react-bootstrap";
import OrderCard from "../../../components/customer/OrderCard";
import styles from "../../../styles/shop/customer/pending.module.css";

const Open = () => {
  return (
    <div className={styles.pending}>
      <section className={styles.header}>
        <Container>
          <h1>Open Orders</h1>
          <p>Overview of your open orders</p>
        </Container>
      </section>
      <section className="mt-4">
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

Open.layout = "customer";

export default Open;
