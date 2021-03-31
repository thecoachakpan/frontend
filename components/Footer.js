import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<footer className={`${styles.footer} pt-5 pb-5 text-white`}>
			<Container>
				<Row>
					<Col xs={12} md={3}>
						<img src="images/logo.svg" alt="logo"/>
					</Col>
					<Col xs={12} md={3}>
						<h4 className="mb-4">PayByBit</h4>
						<p>
							customer@paybybit.com<br/>
							+234 (0) 23456789
						</p>
					</Col>
					<Col xs={12} md={3}>
						<h4 className="mb-4">Quick Links</h4>
						<p>
							Home<br/>
							Solutions<br/>
							Features<br/>
							Merchant<br/>
							Customers<br/>
							Terms of use<br/>
						</p>
					</Col>
					<Col xs={12} md={3}>
						<h4 className="mb-4">Follow Us</h4>
						<p>
							<img src="images/sociallinks.png" width="200" alt="social"/>
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
