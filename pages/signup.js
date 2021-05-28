import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { PrimaryButton } from "../components/common";
// @ts-ignore
import styles from "../styles/Auth.module.css";
import { serverRequest } from "../utils/serverRequest";
// import

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupError, setSignupError] = useState([]);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [success, setSuccess] = useState(false);

  const isMounted = useRef();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const endpoint = `${process.env.BACKEND_API}/shopper/auth/signup`;
      const response = await serverRequest().post(endpoint, data);
      console.log(response);
      if (isMounted.current) {
        reset();
        setSuccess(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      if (
        isMounted.current &&
        error &&
        error.response &&
        error.response.data &&
        error.response.data.data
      ) {
        setIsSubmitting(false);
        if (error.response.data.data[0].message) {
          setSignupError([error.response.data.data[0].message]);
          return;
        }
        setSignupError(
          error.response.data.data || ["error processing your signup"]
        );
      }
    }
  };

  return (
    <div className={styles.authentication}>
      <Head>
        <title>PinchPayer - Pay Small Small</title>
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
                          src="images/logo.png"
                          className="img-fluid mx-auto"
                          alt="pinchpayer logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        name="email"
                        {...register("email", { required: true })}
                        placeholder="Email Address"
                        type="email"
                      />
                      {errors && errors.email && (
                        <Form.Text className="text-danger">
                          Email is required
                        </Form.Text>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Choose a Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          name="password"
                          {...register("password", {
                            required: true,
                            pattern:
                              // /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}$/,
                              /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                          })}
                          placeholder="Password"
                          type={showPass ? "text" : "password"}
                          className="border-right-0"
                        />
                        <InputGroup.Append className="border border-left-0">
                          {!showPass && (
                            <IoEyeSharp
                              className="my-auto pr-2"
                              onClick={() => setShowPass(!showPass)}
                              style={{ cursor: "pointer" }}
                              size="28"
                            />
                          )}
                          {showPass && (
                            <BsEyeSlashFill
                              className="my-auto pr-2"
                              onClick={() => setShowPass(!showPass)}
                              style={{ cursor: "pointer" }}
                              size="28"
                            />
                          )}
                        </InputGroup.Append>
                      </InputGroup>
                      {errors && errors.password && (
                        <Form.Text className="text-danger">
                          must include capital, lowercase, number and character
                        </Form.Text>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Please confirm your password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          name="confirmPassword"
                          {...register("confirmPassword", {
                            required: true,
                            validate: (value) =>
                              value === getValues("password"),
                          })}
                          placeholder="Confirm Password"
                          type={showConfirmPass ? "text" : "password"}
                          className="border-right-0"
                        />
                        <InputGroup.Append className="border border-left-0">
                          {!showConfirmPass && (
                            <IoEyeSharp
                              className="my-auto pr-2"
                              onClick={() =>
                                setShowConfirmPass(!showConfirmPass)
                              }
                              style={{ cursor: "pointer" }}
                              size="28"
                            />
                          )}
                          {showConfirmPass && (
                            <BsEyeSlashFill
                              className="my-auto pr-2"
                              onClick={() =>
                                setShowConfirmPass(!showConfirmPass)
                              }
                              style={{ cursor: "pointer" }}
                              size="28"
                            />
                          )}
                        </InputGroup.Append>
                      </InputGroup>
                      {errors && errors.confirmPassword && (
                        <Form.Text className="text-danger">
                          Must match password
                        </Form.Text>
                      )}
                    </Form.Group>
                    {signupError && signupError.length > 0 && (
                      <Alert variant="warning" className="">
                        <ul className="mb-0">
                          {signupError &&
                            signupError.map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                        </ul>
                      </Alert>
                    )}

                    <small>
                      By submitting this form, i acknowledge that I have read
                      and do hereby accept the terms and conditions in the
                      PaybyBit Terms of Use, Merchant Agreement and Privacy
                      Policy
                    </small>

                    <PrimaryButton
                      type="submit"
                      variant="primary"
                      className="pt-3 pb-3 mt-5 "
                      disabled={isSubmitting}
                      block>
                      {isSubmitting ? (
                        <>
                          <Spinner animation="border" role="status" size="sm" />{" "}
                          Wait...
                        </>
                      ) : (
                        "Sign Up"
                      )}
                    </PrimaryButton>
                    {success && (
                      <Alert variant="success" className="text-center mt-3">
                        Your registration was successful, please check your mail
                        to confirm your registration
                      </Alert>
                    )}
                  </Form>
                  <div className="text-center">
                    <p className="text-center">
                      Already have an account?{" "}
                      <Link href="/login" className="text-primary">
                        <a>Login</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

Signup.layout = "auth";

export default Signup;
