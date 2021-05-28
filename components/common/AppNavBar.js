import Link from "next/link";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { PrimaryButton } from ".";
// @ts-ignore
import styles from "../../styles/AppNavBar.module.css";
import Drawer from "./Drawer";

const AppNavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="dark"
      className=""
      fixed="top">
      <Container className="mycontainer">
        <Navbar.Brand href="/">
          <Link href="/">
            <img
              src="/images/logo.png"
              width="163.49"
              height="42.76"
              alt="pay small small"
            />
          </Link>
        </Navbar.Brand>
        <AiOutlineMenu
          size="24"
          className="d-lg-none"
          onClick={() => setOpenDrawer(true)}
        />
        <Drawer show={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-0 ml-md-5">
            <Nav.Link
              href="personal"
              className={`${styles.navlink} text-capitalize`}>
              About Us
            </Nav.Link>
            <Nav.Link
              href="personal"
              className={`${styles.navlink} text-capitalize`}>
              Policy
            </Nav.Link>
            <Link href="/business" passHref>
              <Nav.Link className={styles.navlink}>Business</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link href="/shop" passHref>
              <Nav.Link className={styles.navlink}>Shop</Nav.Link>
            </Link>
            <Nav.Link href="#deets" className={styles.navlink}>
              Solutions
            </Nav.Link>
            <Nav.Link href="#deets" className={styles.navlink}>
              Products
            </Nav.Link>
            <Link href="/login" passHref>
              <Nav.Link
                className={`${styles.navlink} mr-4 ml-0 ml-md-3 mb-3 mb-md-0`}>
                Login
              </Nav.Link>
            </Link>
            <Link href="/signup">
              <a>
                <PrimaryButton>Create Account</PrimaryButton>
              </a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
