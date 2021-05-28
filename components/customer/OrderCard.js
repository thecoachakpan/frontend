import Link from "next/link";
import React from "react";
import { Badge } from "react-bootstrap";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "../../styles/shop/customer/components/OrderCard.module.css";

const OrderCard = () => {
  const value = 50;
  const id = 698878878978;
  return (
    <Link href={`/shop/customer/order/${id}`}>
      <a className={styles.order}>
        <div>
          <div className={styles.id}>
            <div className={styles.no}>#121546565</div>
            <div className={styles.status}>
              <Badge variant="primary">Pending</Badge>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.content}>
              <CircularProgressbarWithChildren
                styles={{
                  background: {
                    fill: "#007bff",
                  },
                }}
                value={value}>
                <div className={styles.price}>₦10000</div>
                <div className={styles.remaining}>2 of 3</div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
          <div className={styles.progress}>
            <div className={styles.one}>
              <div className={styles.value}>₦5000</div>
              <div className={styles.name}>Total Pay</div>
            </div>
            <div className={styles.two}>
              <div className={styles.value}>₦5000</div>
              <div className={styles.name}>Next Pay</div>
            </div>
            <div className={styles.three}>
              <div className={styles.value}>11/08/21</div>
              <div className={styles.name}>Next Pay</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default OrderCard;
