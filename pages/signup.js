import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react'
import { Col, Container, Form, Row, Button, InputGroup } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
// @ts-ignore
import styles from '../styles/Auth.module.css'

const signup = () => {

	const[showPass, setShowPass] = useState(false);

	const { register, handleSubmit, errors } = useForm({
		mode: 'onChange'
	});

	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<div className={styles.authentication}>
			<Head>
        <title>PayByBit - Pay Small Small</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<main>
				<section className="text-center">
					<Container>
						<Row>
							<Col>
								<Link href="/"><img style={{cursor: "pointer"}} src="images/logo.svg" className="img-fluid mb-5" alt="paybybit logo"/></Link>
								<h1>Let's Get You Started With <br/>your Paybybit Account</h1>
							</Col>
						</Row>
					</Container>
				</section>
				<section className="mt-5">
					<Container>
						<Row>
							<Col>
								<Form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} mx-auto`}>
									<Form.Group>
										<Form.Label>First name</Form.Label>
										<Form.Control name="firstname" ref={register({required: true})} placeholder="First Name" type="text"/>
										{errors && errors.firstname && <Form.Text className="text-danger">Firstname is required</Form.Text>}
									</Form.Group>
									<Form.Group>
										<Form.Label>Last name</Form.Label>
										<Form.Control name="lastname" ref={register({required: true})} placeholder="Last Name" type="text"/>
										{errors && errors.lastname && <Form.Text className="text-danger">Lastname is required</Form.Text>}
									</Form.Group>
									<Form.Group>
										<Form.Label>Email Address</Form.Label>
										<Form.Control name="email" ref={register({required: true})} placeholder="Email Address" type="email"/>
										{errors && errors.email && <Form.Text className="text-danger">Email is required</Form.Text>}
									</Form.Group>
									<Form.Group>
										<Form.Label>Phone Number</Form.Label>
										<Form.Control name="phone" ref={register({required: true})} placeholder="+2348022835496" type="tel"/>
										{errors && errors.phone && <Form.Text className="text-danger">Phone is required</Form.Text>}
									</Form.Group>
									<Form.Group>
										<Form.Label>Got a referral code? (optional)</Form.Label>
										<Form.Control name="referral" ref={register} placeholder="Referral Code" type="text"/>
										{errors && errors.referral && <Form.Text className="text-danger">Referral is required</Form.Text>}
									</Form.Group>
									<Form.Group>
										<Form.Label>Choose a Password</Form.Label>
										<InputGroup>
											<Form.Control name="password" ref={register({required: true})} placeholder="Password" type={showPass?"text":"password"} className="border-right-0"/>
											<InputGroup.Append className="border border-left-0">
												<img src="images/icons/eye.png" style={{cursor: "pointer"}} onClick={() => setShowPass(!showPass)} className="my-auto pr-2" height="20" alt="show password"/>
											</InputGroup.Append>
										</InputGroup>
										{errors && errors.password && <Form.Text className="text-danger">Password is required</Form.Text>}
									</Form.Group>
									<Form.Group>
										<Form.Label>Please confirm your password</Form.Label>
										<InputGroup>
											<Form.Control name="confirmpassword" ref={register({required: true})} placeholder="Confirm Password" type={showPass?"text":"password"} className="border-right-0"/>
											<InputGroup.Append className="border border-left-0">
												<img src="images/icons/eye.png" style={{cursor: "pointer"}} onClick={() => setShowPass(!showPass)} className="my-auto pr-2" height="20" alt="show password"/>
											</InputGroup.Append>
										</InputGroup>
										{errors && errors.confirmpassword && <Form.Text className="text-danger">Confirm password is required</Form.Text>}
									</Form.Group>
									<small>
										By submitting this form, i acknowledge that I have read and do hereby accept the terms 
										and conditions in the PaybyBit Terms of Use, Merchant Agreement and Privacy Policy
									</small>

									<Button type="submit" variant="primary" className="pt-3 pb-3 mt-5 mb-4" block>Get Started</Button>
									<p className="text-center">Already have an account? <Link href="login" className="text-primary">Login</Link></p>
								</Form>
							</Col>
						</Row>
					</Container>
				</section>

			</main>
		</div>
	)
}

signup.layout = "auth"

export default signup
