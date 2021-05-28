import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Alert, Card, Form, InputGroup, Spinner } from "react-bootstrap";
// import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import { BiAtom, BiEditAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton } from "../../../components/common";
import { wrapper } from "../../../store/store";
import { AUTH_COMPLETE_RESOLVED } from "../../../store/types/authTypes";
import styles from "../../../styles/common/Welcome.module.css";
import { shoppersRoutes } from "../../../utils/routes";
import { serverRequest } from "../../../utils/serverRequest";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // const state = store.getState();
    // console.log("server: ", state);
    // const { isAuthenticated, user, role } = state.auth;
    // if (!isAuthenticated || !user) {
    //   return {
    //     redirect: {
    //       destination: "/login",
    //       permanent: false,
    //     },
    //   };
    // }
    return {
      props: {},
    };
  }
);

const Welcome = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated, user, role, token } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated || !user || role !== 1) {
      router.push(shoppersRoutes.LOGIN);
    }
    if (user) {
      const {
        phoneVerified,
        bvnVerified,
        bankVerified,
        employerVeried,
        emailVerified,
      } = user;
      if (!emailVerified) {
        setStep(1);
      } else if (!phoneVerified) {
        setStep(2);
      } else if (!bvnVerified) {
        setStep(3);
      } else if (!bankVerified) {
        setStep(4);
      } else if (!employerVeried) {
        setStep(5);
      } else {
        router.push(shoppersRoutes.SHOPPERS_HOME);
      }
    }
  }, [isAuthenticated, role, router, user]);

  const EmailVerification = () => {
    const [sent, setSent] = useState(false);
    // const [approved, setApproved] = useState(false);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmitPhone = async () => {
      try {
        // resend verification link
        setSent(true);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <Head>
          <title>PinchPayer - Confirm Email</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Step 1/5</h2>
        <div className={styles.subheader}>Email Verification</div>
        <div className={styles.details}>
          We sent a verification link to your registered email{" "}
          <span className="text-success">{user.email}</span>.{" "}
        </div>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit(onSubmitPhone)}>
            <PrimaryButton className="mt-4" type="submit">
              Resend Link
            </PrimaryButton>
          </Form>
          {sent && (
            <Alert variant="info" className="mt-3">
              <small>
                Verification sent to{" "}
                <span className="text-success">{user.email}</span>
              </small>
            </Alert>
          )}
        </div>
      </>
    );
  };

  const PhoneVerification = () => {
    const [sent, setSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    // const [approved, setApproved] = useState(false);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmitPhone = async (data) => {
      try {
        setIsSubmitting(true);
        const endpoint = `${process.env.BACKEND_API}/shopper/profile/sendSMSToken`;
        await serverRequest(token).post(endpoint, data);
        setSent(true);
        setIsSubmitting(false);
        const payload = {
          phoneVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        // setStep(step + 1);
      } catch (error) {
        console.log((error && error.response && error.response.data) || error);
        setError("Couldn't send token now, please try again using +234");
        setIsSubmitting(false);
      }
    };

    const onSubmitToken = async (data) => {
      try {
        setIsSubmitting(true);
        const smsToken = data.token;
        const endpoint = `${process.env.BACKEND_API}/shopper/profile/verifyPhone/${smsToken}`;
        await serverRequest(token).post(endpoint);
        setSent(true);
        // console.log(JSON.stringify(data));
        const payload = {
          phoneVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        setStep(step + 1);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <Head>
          <title>PinchPayer - Phone Number Verification</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Step 2/5</h2>
        <div className={styles.subheader}>Phone Number Verification</div>
        <div className={styles.details}>
          We'll send you a 4 digit verification code which expires in 5 minutes.{" "}
        </div>
        <div className={styles.form}>
          {!sent && (
            <Form onSubmit={handleSubmit(onSubmitPhone)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="tel"
                  {...register("phoneNumber", { required: true })}
                  className={styles.textinput}
                  placeholder="Enter phone +234"
                />
                <Form.Text className="text-muted">
                  We'll never share your phone number with anyone else.
                </Form.Text>
                <Form.Text className="text-danger">
                  {errors.phoneNumber && <span>Phone is required</span>}
                </Form.Text>
              </Form.Group>
              <PrimaryButton
                className="mt-4"
                disabled={isSubmitting}
                type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner animation="border" role="status" size="sm" />{" "}
                    Wait...
                  </>
                ) : (
                  // "Send Token"
                  "Save Phone"
                )}
              </PrimaryButton>
              {error && (
                <Alert variant="warning" className="mt-3">
                  <small>{error}</small>
                </Alert>
              )}
            </Form>
          )}
          {sent && (
            <Form onSubmit={handleSubmit(onSubmitToken)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="font-weight-bold mb-3">
                  Token Sent to {watch("phone")}{" "}
                  <PrimaryButton
                    variant="outline-secondary"
                    className="text-white ml-2 pl-2 pr-2 pt-1 pb-1">
                    Resend
                  </PrimaryButton>
                </Form.Label>
                <InputGroup className="">
                  <Form.Control
                    type="text"
                    {...register("token", { required: true })}
                    className={styles.textinput}
                    placeholder="Enter Token"
                  />
                </InputGroup>
                <Form.Text className="text-danger">
                  {errors.token && <span>Token required</span>}
                </Form.Text>
                <Form.Text
                  className="text-muted"
                  onClick={() => setSent(false)}
                  style={{ cursor: "pointer", textDecoration: "underline" }}>
                  Use a different number.
                </Form.Text>
              </Form.Group>
              <PrimaryButton
                className="mt-4"
                disabled={isSubmitting}
                type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner animation="border" role="status" size="sm" />{" "}
                    Wait...
                  </>
                ) : (
                  "Submit Token"
                )}
              </PrimaryButton>
              {error && (
                <Alert variant="warning" className="mt-3">
                  <small>{error}</small>
                </Alert>
              )}
            </Form>
          )}
        </div>
      </>
    );
  };

  const BVNverification = () => {
    const [bvnDetails, setBVNDetails] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmitBVN = async (data) => {
      try {
        setIsSubmitting(true);
        const endpoint = `${process.env.BACKEND_API}/shopper/profile/verifyBVN`;
        await serverRequest(token).post(endpoint, data);
        // console.log(response.data);
        setIsSubmitting(false);
        const payload = {
          bvnVerified: 1,
          firstName: data.firstName,
          lastName: data.lastName,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        // setBVNDetails({
        //   firstName: "Oladehinde",
        //   lastname: "Kazeem",
        // });
      } catch (error) {
        console.log((error && error.response && error.response.data) || error);
        setError("Couldn't verify now, please try again");
        setIsSubmitting(false);
      }
    };

    const onNext = async (data) => {
      try {
        const payload = {
          bvnVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        // setStep(4);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <Head>
          <title>PinchPayer - BVN Verification</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Step 3/5</h2>
        <div className={styles.subheader}>BVN Verification</div>
        <div className={styles.details}>
          Input your registered bvn for verification.{" "}
        </div>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit(onSubmitBVN)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("bvn", { required: true })}
                  className={styles.textinput}
                  placeholder="Enter BVN"
                />
                {/* <PrimaryButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="outline-secondary"
                  className="text-white">
                  {isSubmitting ? (
                    <>
                      <Spinner animation="border" role="status" size="sm" />{" "}
                      Wait...
                    </>
                  ) : (
                    "Verify"
                  )}
                </PrimaryButton> */}
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.last && <span>BVN required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("firstName", { required: true })}
                  className={styles.textinput}
                  placeholder="First Name"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.firstName && <span>First name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("lastName", { required: true })}
                  className={styles.textinput}
                  placeholder="Last Name"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.lastName && <span>Last name is required</span>}
              </Form.Text>
            </Form.Group>
            <PrimaryButton
              disabled={isSubmitting}
              className="mt-5 mb-5"
              type="submit">
              {isSubmitting ? (
                <>
                  <Spinner animation="border" role="status" size="sm" /> Wait...
                </>
              ) : (
                "Next step"
              )}
            </PrimaryButton>
            {error && (
              <Alert variant="warning" className="mt-3">
                <small>{error}</small>
              </Alert>
            )}
            {bvnDetails && bvnDetails.firstName && (
              <>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <div className="mr-2">
                        <BsCheckCircle size="38" color="green" />{" "}
                      </div>
                      <div>
                        <p className="m-0">
                          <span className="font-weight-bold">Firstname:</span>{" "}
                          {bvnDetails.firstName}
                        </p>
                        <p className="m-0">
                          <span className="font-weight-bold">Lastname:</span>{" "}
                          {bvnDetails.lastname}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <PrimaryButton
                  onClick={onNext}
                  className="mt-5 mb-5"
                  type="button">
                  Next step
                </PrimaryButton>
              </>
            )}
          </Form>
        </div>
      </>
    );
  };

  const BankVerification = () => {
    const [bankDetails, setBankDetails] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmitBank = async (data) => {
      try {
        setIsSubmitting(true);
        const endpoint = `${process.env.BACKEND_API}/shopper/profile/verifySalaryAccount`;
        await serverRequest(token).post(endpoint, data);
        const payload = {
          bankVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        setBankDetails({
          bank: "Access Bank",
          accountName: "Oladehinde Kazeem",
          accountNumber: "0215454588",
        });
      } catch (error) {
        console.log(error);
      }
    };

    const onNext = async () => {
      try {
        const payload = {
          bankVerified: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        setStep(5);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <Head>
          <title>PinchPayer - Salary Account Verification</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Step 4/5</h2>
        <div className={styles.subheader}>Salary Account Verification</div>
        <div className={styles.details}>
          Input your salary account details for verification.{" "}
        </div>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit(onSubmitBank)}>
            <Form.Group>
              <Form.Label>Supported Bank Name</Form.Label>
              <Form.Control
                {...register("bankName", { required: true })}
                className={styles.textinput}
                as="select">
                <option value="">Pick your bank</option>
                <option value="01">Access Bank</option>
                <option value="02">First Bank</option>
                <option value="03">UBA</option>
                <option value="04">Zenith Bank</option>
                <option value="04">Eco Bank</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {errors.bankName && <span>Bank Name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("accountNumber", { required: true })}
                  className={styles.textinput}
                  placeholder="Account Number"
                />
                {/* <PrimaryButton
                  type="submit"
                  variant="outline-secondary"
                  disabled={isSubmitting}
                  className="text-white">
                  {isSubmitting ? (
                    <>
                      <Spinner animation="border" role="status" size="sm" />{" "}
                      Wait...
                    </>
                  ) : (
                    "Verify"
                  )}
                </PrimaryButton> */}
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.accountNumber && (
                  <span>Account Number is required</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("accountName", { required: true })}
                  className={styles.textinput}
                  placeholder="Account Name"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.accountName && <span>Account Name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Control
              type="hidden"
              {...register("bankCode")}
              defaultValue="01"
              className={styles.textinput}
            />
            <PrimaryButton
              type="submit"
              variant="outline-secondary"
              disabled={isSubmitting}
              className="text-white">
              {isSubmitting ? (
                <>
                  <Spinner animation="border" role="status" size="sm" /> Wait...
                </>
              ) : (
                "Verify"
              )}
            </PrimaryButton>
            {error && (
              <Alert variant="warning" className="mt-3">
                <small>{error}</small>
              </Alert>
            )}
            {bankDetails && bankDetails.accountName && (
              <>
                <Card>
                  <Card.Body>
                    <div className="d-flex align-items-center">
                      <div className="mr-2">
                        <BsCheckCircle size="38" color="green" />{" "}
                      </div>
                      <div>
                        <p className="m-0">
                          <span className="font-weight-bold">Bank:</span>{" "}
                          {bankDetails.bank}
                        </p>
                        <p className="m-0">
                          <span className="font-weight-bold">
                            Account Name:
                          </span>{" "}
                          {bankDetails.accountName}
                        </p>
                        <p className="m-0">
                          <span className="font-weight-bold">
                            Account Number:
                          </span>{" "}
                          {bankDetails.accountNumber}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <div>
                  <PrimaryButton
                    onClick={onNext}
                    className="mt-5 mb-5"
                    type="button">
                    Next step
                  </PrimaryButton>
                </div>
              </>
            )}
          </Form>
        </div>
      </>
    );
  };

  const Employer = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    // const [startDate, setStartDate] = useState(new Date());

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmitBank = async (data) => {
      data.startDate = new Date(data.startDate);
      try {
        setIsSubmitting(true);
        const endpoint = `${process.env.BACKEND_API}/shopper/profile/verifyEmployer`;
        await serverRequest(token).post(endpoint, data);
        const payload = {
          employerVeried: 1,
        };
        dispatch({
          type: AUTH_COMPLETE_RESOLVED,
          payload: payload,
        });
        router.push(shoppersRoutes.SHOPPERS_HOME);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <Head>
          <title>PinchPayer - Employer Verification</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2>Step 5/5</h2>
        <div className={styles.subheader}>Employer Verification</div>
        <div className={styles.details}>
          Input your employer details for verification.{" "}
        </div>
        <div className={styles.form}>
          <Form onSubmit={handleSubmit(onSubmitBank)}>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("companyName", { required: true })}
                  className={styles.textinput}
                  placeholder="Company Name"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.companyName && <span>Company name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("companyAddress", { required: true })}
                  className={styles.textinput}
                  placeholder="Company Address"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.companyAddress && (
                  <span>Company address is required</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Supported States</Form.Label>
              <Form.Control
                {...register("state", { required: true })}
                className={styles.textinput}
                as="select">
                <option value="">Pick state</option>
                <option value="lagos">Lagos State</option>
                <option value="abuja">Abuja State</option>
                <option value="rivers">Rivers State</option>
                <option value="kano">Kano State</option>
              </Form.Control>
              <Form.Text className="text-danger">
                {errors.state && <span>Bank Name is required</span>}
              </Form.Text>
            </Form.Group>
            <hr />
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("companyHRMName", { required: true })}
                  className={styles.textinput}
                  placeholder="Company HRM Name"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.companyHRMName && <span>HRM name is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("companyHRMPhone", { required: true })}
                  className={styles.textinput}
                  placeholder="HRM Phone"
                />
              </InputGroup>
              <Form.Text className="text-danger">
                {errors.companyHRMPhone && <span>HRM phone is required</span>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <InputGroup className="">
                <Form.Control
                  type="text"
                  {...register("startDate", { required: true })}
                  className={styles.textinput}
                  placeholder="employment Start Date e.g 2021-10-25"
                />
              </InputGroup>
              {/* <DatePicker onChange={setStartDate} value={startDate} /> */}
              <Form.Text className="text-danger">
                {errors.startDate && <span>Date is required</span>}
              </Form.Text>
            </Form.Group>
            <PrimaryButton
              disabled={isSubmitting}
              className="mt-5 mb-5"
              type="submit">
              {isSubmitting ? (
                <>
                  <Spinner animation="border" role="status" size="sm" /> Wait...
                </>
              ) : (
                "Complete"
              )}
            </PrimaryButton>
            {error && (
              <Alert variant="warning" className="mt-3">
                <small>{error}</small>
              </Alert>
            )}
          </Form>
        </div>
      </>
    );
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.progress}>
        <div className={styles.logo}>
          <Link href="/">
            <a href="/">
              <img
                src="/images/logo.png"
                width="163.49"
                height="42.76"
                alt="pay small small"
              />
            </a>
          </Link>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 1 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 1 && <BiAtom size="38" color="grey" />}{" "}
              {step === 1 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>Email</h5>
              <p>larrysnet2001@gmail.com</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 2 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 2 && <BiAtom size="38" color="grey" />}{" "}
              {step === 2 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>Phone</h5>
              <p>Verify Phone</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 3 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 3 && <BiAtom size="38" color="grey" />}{" "}
              {step === 3 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>BVN</h5>
              <p>Verify bvn</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 4 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 4 && <BiAtom size="38" color="grey" />}{" "}
              {step === 4 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>Bank Account</h5>
              <p>Salary account</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className="mr-3">
              {step > 5 && <BsCheckCircle size="38" color="green" />}{" "}
              {step < 5 && <BiAtom size="38" color="grey" />}{" "}
              {step === 5 && <BiEditAlt size="38" color="black" />}{" "}
            </div>
            <div>
              <h5>Employer</h5>
              <p>Verify employer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.overlay}>
          <div className={styles.circle} />
          <div className={styles.circle2} />
          <div className={styles.triangle} />
        </div>
        <div className={styles.heading}>
          <div className="mt-3 d-md-none">
            <Link href="/">
              <a href="/">
                <img
                  src="/images/logo.png"
                  width="163.49"
                  height="42.76"
                  alt="pay small small"
                />
              </a>
            </Link>
          </div>
          <h1>Complete Registration</h1>
        </div>
        <div className={styles.body}>
          {step === 1 && <EmailVerification />}
          {step === 2 && <PhoneVerification />}
          {step === 3 && <BVNverification />}
          {step === 4 && <BankVerification />}
          {step === 5 && <Employer />}
        </div>
      </div>
    </div>
  );
};

Welcome.layout = "onboarding";

export default Welcome;
