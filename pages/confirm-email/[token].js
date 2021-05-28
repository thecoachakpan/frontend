import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PrimaryButton } from "../../components/common";
// @ts-ignore
import styles from "../../styles/Auth.module.css";
import { serverRequest } from "../../utils/serverRequest";

export const getServerSideProps = async ({ params }) => {
  try {
    const { token } = params;
    const endpoint = `${process.env.BACKEND_API}/shopper/auth/verifyEmailToken/${token}`;
    await serverRequest().post(endpoint);
    return {
      props: { status: true },
    };
  } catch (error) {
    console.log((error && error.response && error.response.data) || error);
    return {
      props: { status: false },
    };
  }
};

const ConfirmEmail = ({ status }) => {
  return (
    <div className={styles.authentication}>
      <Head>
        <title>PinchPayer - Email Verification</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Container>
            <Row>
              <Col>
                <div className={`${styles.authbox} mx-auto`}>
                  <div className="d-flex justify-content-center mb-5">
                    <Link href="/" passHref>
                      <a>
                        <img
                          style={{ cursor: "pointer" }}
                          src="/images/logo.png"
                          className="img-fluid mx-auto"
                          alt="pinchpayer logo"
                        />
                      </a>
                    </Link>
                  </div>

                  {status ? (
                    <div className="text-center">
                      <img
                        src="/images/undraw_finish.png"
                        className="img-fluid w-75"
                        alt="success"
                      />
                      <h5 className="mt-4">Verification Successful</h5>
                      <p>
                        Congratulations, please login to complete your
                        registration
                      </p>
                      <Link href="/login" passHref>
                        <a>
                          <PrimaryButton
                            variant="primary"
                            className="pt-3 pb-3 mt-5 "
                            block>
                            Login here
                          </PrimaryButton>
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src="/images/undraw_cancel.png"
                        className="img-fluid w-75"
                        alt="success"
                      />
                      <h5 className="mt-4">Verification Failed</h5>
                      <p>Please check your mail to confirm verification link</p>
                      <Link href="/" passHref>
                        <a>
                          <PrimaryButton
                            variant="primary"
                            className="pt-3 pb-3 mt-5 "
                            block>
                            Home page
                          </PrimaryButton>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

ConfirmEmail.layout = "auth";

export default ConfirmEmail;
