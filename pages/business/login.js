import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Badge,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PrimaryButton } from "../../components/common";
import { AUTH_CANCELED, AUTH_RESOLVED } from "../../store/types/authTypes";
// @ts-ignore
import styles from "../../styles/Auth.module.css";
import { businessRoutes, publicRoutes } from "../../utils/routes";
// import { serverRequest } from "../utils/serverRequest";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const isMounted = useRef(false);
  const dispatch = useDispatch();

  useEffect(() => {
    isMounted.current = true;
    dispatch({ type: AUTH_CANCELED });
    return () => {
      isMounted.current = false;
    };
  }, [dispatch]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      // const endpoint = `${process.env.BACKEND_API}/shopper/auth/login`;
      // const response = await serverRequest().post(endpoint, data);
      // console.log(response);
      if (
        data.email !== "larrysnet2001@gmail.com" ||
        data.password !== "Password@2021"
      ) {
        throw "wrong email or password";
      }
      const payload = {
        token: 3155454545454,
        role: 2,
        user: {
          id: 1,
          firstName: "Oladehinde",
          lastname: "Kazeem",
          email: "larrysnet2001@gmail.com",
          role: 1,
          profile_pic: "",
          banner_image: "",
          state_of_origin: "lagos",
          nationality: "nigeria",
          phone: "08022835496",
          emailVerified: 1,
          phoneVerified: 1,
          bvnVerified: 1,
          bankVerified: 1,
          employerVeried: 1,
        },
      };
      dispatch({
        type: AUTH_RESOLVED,
        payload: payload,
      });
      router.push(businessRoutes.BUSINESS_HOME);
    } catch (error) {
      setLoginError(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.authentication}>
      <Head>
        <title>Login to PinchPayer - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Container>
            <Row>
              <Col>
                <div className={`${styles.authbox} mx-auto`}>
                  <div className="d-flex justify-content-center mb-5">
                    <Link href={publicRoutes.HOME} passHref>
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
                  <div className="text-center">
                    <Badge variant="primary">Business</Badge>
                  </div>

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        name="email"
                        {...register("email", { required: true })}
                        // ref={register({ required: true })}
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
                          {...register("password", { required: true })}
                          placeholder="Password"
                          type="password"
                          className="border-right-0"
                        />
                      </InputGroup>
                      {errors && errors.password && (
                        <Form.Text className="text-danger">
                          Password is required
                        </Form.Text>
                      )}
                    </Form.Group>
                    {loginError && (
                      <Alert variant="warning" className="text-center">
                        {loginError}
                      </Alert>
                    )}
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
                        "Login to PinchPayer"
                      )}
                    </PrimaryButton>
                  </Form>
                  <div className="text-center">
                    <p>
                      New to PinchPayer Business?{" "}
                      <Link
                        href={businessRoutes.SIGNUP}
                        className="text-primary">
                        <a>Signup</a>
                      </Link>
                    </p>
                    <Link href="/">
                      <a>Forgot your password?</a>
                    </Link>
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

Login.layout = "auth";

export default Login;
