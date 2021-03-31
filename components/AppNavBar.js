import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import styles from '../styles/AppNavBar.module.css';

const AppNavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className="shadow" fixed="top">
			<Container>
				<Navbar.Brand href="#home">
					<img src="/images/logo.svg" width="163.49" height="42.76" alt="pay small small"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto ml-0 ml-md-5">
						<Nav.Link href="personal" className={`${styles.navlink} text-capitalize`}>Personal</Nav.Link>
						<Nav.Link href="business" className={styles.navlink}>Business</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets" className={styles.navlink}>Shop</Nav.Link>
						<Nav.Link href="#deets" className={styles.navlink}>Solutions</Nav.Link>
						<Nav.Link href="#deets" className={styles.navlink}>Products</Nav.Link>
						<Button variant="outline-primary" className={`${styles.signupButton} ml-0 ml-md-5`}>Sign Up</Button>
						<Button variant="Light" className={styles.loginButton}>Log In</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default AppNavBar
