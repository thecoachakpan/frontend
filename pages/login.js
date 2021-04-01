import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
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
								<h1>Login to PaybyBit</h1>
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
										<Form.Label>Email Address</Form.Label>
										<Form.Control name="email" ref={register({required: true})} placeholder="Email Address" type="email"/>
										{errors && errors.email && <Form.Text className="text-danger">Email is required</Form.Text>}
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
									<small className="text-primary">
										Forgot Password?
									</small>

									<Button type="submit" variant="primary" className="pt-3 pb-3 mt-5 mb-4" block>Login to PaybyBit</Button>
									<p className="text-center">Don't have a PaybyBit account? <Link href="/signup" className="text-primary">Signup</Link></p>
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
