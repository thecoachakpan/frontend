import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { OutlinePrimaryButton, PrimaryButton } from "../../components/common";
import styles from "../../styles/shop/checkout.module.css";
import { formatDate, moneyFormat } from "../../utils/helpers";
import { shoppersRoutes } from "../../utils/routes";

const Checkout = () => {
  const [instalment, setInstalment] = useState(true);

  const { total, cart } = useSelector((state) => state.cart);

  const router = useRouter();

  if (!total || cart.length < 1) {
    router.push(shoppersRoutes.SHOPPERS_HOME);
  }

  const handleDate = (sum = 0) => {
    return new Date(
      new Date().setDate(new Date().getDate() + sum)
    ).toISOString();
  };

  const oneData = {
    id: 1,
    payDate: handleDate(),
    amount: total,
    status: "Pending",
  };

  const instalmentData = [
    {
      id: 1,
      payDate: handleDate(),
      dueDate: handleDate(2),
      amount: (total / 3).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0],
      status: "Pending",
    },
    {
      id: 2,
      payDate: handleDate(30),
      dueDate: handleDate(32),
      amount: (total / 3).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0],
      status: "Pending",
    },
    {
      id: 3,
      payDate: handleDate(60),
      dueDate: handleDate(62),
      amount: (total / 3).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0],
      status: "Pending",
    },
  ];

  return (
    <div className={styles.checkout}>
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1>
                Checkout with <span className="text-primary">PinchPayer</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className={styles.content}>
            <div className={styles.top}>
              <div>
                <h2>Payment Information</h2>
                <p>
                  How would you like to pay{" "}
                  <span className="font-weight-bold">
                    ₦{moneyFormat(total)}
                  </span>{" "}
                  instalment?{" "}
                </p>
                {instalment ? (
                  <div className={styles.buttons}>
                    <PrimaryButton
                      onClick={() => setInstalment(true)}
                      className="pt-2 pb-2 mr-2">
                      3 times instalment
                    </PrimaryButton>
                    <OutlinePrimaryButton
                      onClick={() => setInstalment(false)}
                      className="pt-2 pb-2 mr-2">
                      One Time payment
                    </OutlinePrimaryButton>
                  </div>
                ) : (
                  <div className={styles.buttons}>
                    <OutlinePrimaryButton
                      onClick={() => setInstalment(true)}
                      className="pt-2 pb-2 mr-2">
                      3 times instalment
                    </OutlinePrimaryButton>
                    <PrimaryButton
                      onClick={() => setInstalment(false)}
                      className="pt-2 pb-2 mr-2">
                      One Time payment
                    </PrimaryButton>
                  </div>
                )}
              </div>
              <div>
                <img
                  className="img-fluid"
                  src="/images/logo.png"
                  alt="pinchpayer"
                />
              </div>
            </div>
            <div className={styles.down}>
              <section className="d-md-none">
                <div className={styles.history}>
                  <div className={styles.body}>
                    {instalment ? (
                      <>
                        {instalmentData.map((record, index) => (
                          <div key={index} className={styles.pay}>
                            <div>
                              <h5>₦{moneyFormat(record.amount)} </h5>
                              <div>
                                <Badge variant="primary">{record.status}</Badge>
                              </div>
                            </div>
                            <div className={styles.dates}>
                              <div>Pay: {formatDate(record.payDate)}</div>
                              <div>Due: {formatDate(record.dueDate)}</div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className={styles.pay}>
                        <div>
                          <h5>₦{moneyFormat(oneData.amount)} </h5>
                          <div>
                            <Badge variant="primary">{oneData.status}</Badge>
                          </div>
                        </div>
                        <div className={styles.dates}>
                          <div>Pay: {formatDate(oneData.payDate)}</div>
                          <div>Due: {formatDate(oneData.dueDate)}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
              <section className="d-none d-md-block">
                <div className={styles.history}>
                  <div className={styles.header}>
                    <div>#</div>
                    <div>Pay Date</div>
                    {instalment && <div>Due Date</div>}
                    <div>Amount</div>
                    <div>Status </div>
                  </div>
                  <div className={styles.body}>
                    {instalment ? (
                      <>
                        {instalmentData.map((record, index) => (
                          <div key={index} className={styles.pay}>
                            <div>{record.id}</div>
                            <div>{formatDate(record.payDate)}</div>
                            <div>{formatDate(record.dueDate)}</div>
                            <div>₦{moneyFormat(record.amount)}</div>
                            <div>{record.status}</div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className={styles.pay}>
                        <div>{oneData.id}</div>
                        <div>{formatDate(oneData.payDate)}</div>
                        <div>₦{moneyFormat(oneData.amount)}</div>
                        <div>{oneData.status}</div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
            <div className={styles.bottom}>
              <div className={styles.total}>
                <h6>Order Total: ₦{moneyFormat(total)}</h6>
                <h5>
                  Payment: ₦
                  {instalment ? moneyFormat(instalmentData[0].amount) : total}
                </h5>
              </div>
              <div className={styles.confirm}>
                <PrimaryButton className="pt-2 pb-2 mr-2">
                  Pay Now
                </PrimaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

Checkout.layout = "shop";

export default Checkout;
