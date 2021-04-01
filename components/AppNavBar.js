import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import Link from 'next/link'
// @ts-ignore
import styles from '../styles/AppNavBar.module.css';

const AppNavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className="shadow" fixed="top">
			<Container>
				<Navbar.Brand href="/">
					<Link href="/">
						<img src="/images/logo.svg" width="163.49" height="42.76" alt="pay small small"/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle className="bg-primary" aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto ml-0 ml-md-5">
						<Nav.Link href="personal" className={`${styles.navlink} text-capitalize`}>Personal</Nav.Link>
						<Nav.Link href="business" className={styles.navlink}>Business</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets" className={styles.navlink}>Shop</Nav.Link>
						<Nav.Link href="#deets" className={styles.navlink}>Solutions</Nav.Link>
						<Nav.Link href="#deets" className={styles.navlink}>Products</Nav.Link>
						<Link href="/signup"><Button href="/signup" variant="outline-primary" className={`${styles.signupButton} ml-0 ml-md-5 mb-3 mb-md-0 mt-4 mt-md-0`}>Sign Up</Button></Link>
						<Link href="/login"><Button href="/login" variant="Light" className={`${styles.loginButton} mb-4 mb-md-0`}>Log In</Button></Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default AppNavBar
