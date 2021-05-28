import React from "react";
import { Container } from "react-bootstrap";
import OrderCard from "../../../components/customer/OrderCard";
import styles from "../../../styles/shop/customer/pending.module.css";

const Completed = () => {
  return (
    <div className={styles.pending}>
      <section className={styles.header}>
        <Container>
          <h1>Completed Orders</h1>
          <p>Overview of your completed orders</p>
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

Completed.layout = "customer";

export default Completed;
