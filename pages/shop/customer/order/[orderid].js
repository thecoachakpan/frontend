import React from "react";
import { Badge, Container } from "react-bootstrap";
import styles from "../../../../styles/shop/customer/singleorder.module.css";

const SingleOrder = () => {
  return (
    <div className={styles.singleorder}>
      <section className={styles.header}>
        <Container>
          <h1>Order</h1>
          <p>Overview of your order #232356665</p>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.details}>
            <div>
              <h2>₦10000.00</h2>
              <div className={styles.progress}>
                <div className={styles.one}>
                  <div className={styles.value}>Start Date</div>
                  <div className={styles.name}>Aug 11, 2021</div>
                </div>
                <div className={styles.two}>
                  <div className={styles.value}>End Date</div>
                  <div className={styles.name}>Oct 10, 2021</div>
                </div>
              </div>
              <div className="mt-3">
                Complete your payment and get the chance to migrate to a higher
                class
              </div>
            </div>
            <div className={`${styles.image} d-none d-md-block`}>
              <img
                src="/images/icons/order-pay.svg"
                className="img-fluid"
                alt="pay"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="d-md-none">
        <Container>
          <div className={styles.history}>
            <div className={styles.body}>
              <div className={styles.pay}>
                <div>
                  <h6>₦10000.00</h6>
                  <h5>₦12000.00 </h5>
                  <h6>1% interest</h6>
                  <div>
                    <Badge variant="primary">Paying</Badge>
                  </div>
                </div>
                <div className={styles.dates}>
                  <div>Pay: Aug 11, 2021</div>
                  <div>Due: Oct 10, 2021</div>
                </div>
              </div>
              <div className={styles.pay}>
                <div>
                  <h6>₦10000.00</h6>
                  <h5>₦12000.00 </h5>
                  <h6>1% interest</h6>
                  <div>
                    <Badge variant="primary">Paying</Badge>
                  </div>
                </div>
                <div className={styles.dates}>
                  <div>Pay: Aug 11, 2021</div>
                  <div>Due: Oct 10, 2021</div>
                </div>
              </div>
              <div className={styles.pay}>
                <div>
                  <h6>₦10000.00</h6>
                  <h5>₦12000.00 </h5>
                  <h6>1% interest</h6>
                  <div>
                    <Badge variant="primary">Paying</Badge>
                  </div>
                </div>
                <div className={styles.dates}>
                  <div>Pay: Aug 11, 2021</div>
                  <div>Due: Oct 10, 2021</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="d-none d-md-block">
        <Container>
          <div className={styles.history}>
            <div className={styles.header}>
              <div>#</div>
              <div>Pay Date</div>
              <div>Due Date</div>
              <div>Amount</div>
              <div>Interest</div>
              <div>Total</div>
              <div>Status</div>
            </div>
            <div className={styles.body}>
              <div className={styles.pay}>
                <div>1</div>
                <div>Aug 11, 2021</div>
                <div>Oct 10, 2021</div>
                <div>₦10000.00</div>
                <div>1%</div>
                <div>₦10000.00</div>
                <div>Paying</div>
              </div>
              <div className={styles.pay}>
                <div>2</div>
                <div>Aug 11, 2021</div>
                <div>Oct 10, 2021</div>
                <div>₦10000.00</div>
                <div>1%</div>
                <div>₦10000.00</div>
                <div>Paying</div>
              </div>
              <div className={styles.pay}>
                <div>3</div>
                <div>Aug 11, 2021</div>
                <div>Oct 10, 2021</div>
                <div>₦10000.00</div>
                <div>1%</div>
                <div>₦10000.00</div>
                <div>Paying</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.products}>
            <div className={styles.product}>
              <div className={styles.image}>
                <img
                  className="img-fluid"
                  src="/images/products/samsung-tv-png-samsung-tv-serie-6.jpg"
                  alt="product"
                />
              </div>
              <div className={styles.price}>
                <h5>₦10000.00</h5>
              </div>
              <div className={`${styles.name} text-truncate`}>Samsung</div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <img
                  className="img-fluid"
                  src="/images/products/Samsung-Galaxy-J6.jpg"
                  alt="product"
                />
              </div>
              <div className={styles.price}>
                <h5>₦10000.00</h5>
              </div>
              <div className={`${styles.name} text-truncate`}>Samsung</div>
            </div>
            <div className={styles.product}>
              <div className={styles.image}>
                <img
                  className="img-fluid"
                  src="/images/products/headphone.jpg"
                  alt="product"
                />
              </div>
              <div className={styles.price}>
                <h5>₦10000.00</h5>
              </div>
              <div className={`${styles.name} text-truncate`}>Samsung</div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

SingleOrder.layout = "customer";

export default SingleOrder;
