import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Dropdown, NavDropdown, Row } from "react-bootstrap";
import { BiRadio } from "react-icons/bi";
import { FaBaby } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import {
  GiGamepad,
  GiHealthNormal,
  GiKitchenKnives,
  GiPerfumeBottle,
  GiSewingNeedle,
  GiWoodenChair,
} from "react-icons/gi";
import { MdDevicesOther } from "react-icons/md";
import { categories } from "../../dummy/categories";
import styles from "../../styles/common/MegaMenu.module.css";

const MegaMenu = () => {
  const Menu = ({ category }) => {
    const [show, setShow] = useState(false);
    const buildIcon = (iconName) => {
      switch (iconName) {
        case "BiRadio":
          return <BiRadio className={styles.icon} />;
        case "GiWoodenChair":
          return <GiWoodenChair className={styles.icon} />;
        case "GiSewingNeedle":
          return <GiSewingNeedle className={styles.icon} />;
        case "FiSmartphone":
          return <FiSmartphone className={styles.icon} />;
        case "GiPerfumeBottle":
          return <GiPerfumeBottle className={styles.icon} />;
        case "GiKitchenKnives":
          return <GiKitchenKnives className={styles.icon} />;
        case "FaBaby":
          return <FaBaby className={styles.icon} />;
        case "GiGamepad":
          return <GiGamepad className={styles.icon} />;
        case "GiHealthNormal":
          return <GiHealthNormal className={styles.icon} />;
        case "MdDevicesOther":
          return <MdDevicesOther className={styles.icon} />;
        default:
          return <BiRadio className={styles.icon} />;
      }
    };
    console.log("rendered: ", category.name);
    return (
      <NavDropdown
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="pr-2 py-2 align-text-top"
        title={
          <>
            <div className={styles.icon}>{buildIcon(category.icon)}</div>
            <div className={styles.text}>{category.name}</div>
          </>
        }
        drop="right"
        show={show}
        id="basic-nav-dropdown">
        <Container className="eventsNav pt-0 mt-0">
          <Row>
            <Col xs="12" md="6" className="text-left">
              <Dropdown.Header>Catering</Dropdown.Header>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    Corporate
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    Private
                  </a>
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Header>
                {"  "}
                Classes
              </Dropdown.Header>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    Barista 101
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    History of Coffee
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    Intro to Cafe Snobbery
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider className="d-md-none" />
            </Col>

            <Col xs="12" md="6" className="text-left">
              <Dropdown.Header>
                {"  "}
                Rentals
              </Dropdown.Header>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    Fireside Room
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    Roasting Room
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>
                {"  "}
                Seasonal
              </Dropdown.Header>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link" role="button">
                    Coldbrew Night
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/">
                  <a className="nav-link text-wrap" role="button">
                    Campfire Coffee Class
                  </a>
                </Link>
              </Dropdown.Item>
            </Col>
          </Row>
        </Container>
      </NavDropdown>
    );
  };
  return (
    <div className={styles.main}>
      <div className={styles.categories}>
        {/* <Row>
        <Col xs={12} md={6}>
          <DropdownButton drop="right" title={` Drop Right `}>
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row> */}
        {categories &&
          categories.length > 0 &&
          categories.map((category, index) => (
            <Menu key={index} category={category} />
          ))}
      </div>
    </div>
  );
};

export default MegaMenu;
