import Link from "next/link";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { BiLogInCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaRegEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import styles from "../../styles/business/components/topbar.module.css";

const TopBar = ({ name }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={styles.topbar}>
      <h1>{name}</h1>
      <div>
        <NavDropdown
          title={
            <>
              <span className="mr-2">{user.firstName}</span>
              <CgProfile className={styles.icon} size="35" />
            </>
          }
          id="nav-dropdown"
          className={styles.dropdown}>
          <Link href="/shop/business" passHref>
            <NavDropdown.Item eventKey="4.2">
              <FaHome className="mr-2" /> Dashboard
            </NavDropdown.Item>
          </Link>
          <Link href="/shop/business/profile" passHref>
            <NavDropdown.Item eventKey="4.2">
              <CgProfile className="mr-2" /> Profile
            </NavDropdown.Item>
          </Link>
          <Link href="/shop/business/inbox" passHref>
            <NavDropdown.Item eventKey="4.2">
              <FaRegEnvelope className="mr-2" /> Inbox
            </NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link href="/logout" passHref>
            <NavDropdown.Item eventKey="4.4">
              <BiLogInCircle className="mr-2" /> Logout
            </NavDropdown.Item>
          </Link>
        </NavDropdown>
      </div>
    </div>
  );
};

export default TopBar;
