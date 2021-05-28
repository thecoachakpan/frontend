import Link from "next/link";
import React from "react";
import { Nav } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/common/drawer.module.css";
import PrimaryButton from "./PrimaryButton";

const ShopDrawer = ({ show, setOpenDrawer }) => {
  return (
    <>
      <div
        className={`${
          show ? `${styles.drawer} ${styles.show}` : styles.drawer
        }`}>
        <div className="text-right mb-3">
          <AiOutlineClose
            size="24"
            className="d-md-none"
            onClick={() => setOpenDrawer(false)}
          />
        </div>
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
        {/* <CategoriesList /> */}
      </div>
      <div className={`${show ? `${styles.backdrop}` : "d-none"}`}></div>
    </>
  );
};

export default ShopDrawer;
