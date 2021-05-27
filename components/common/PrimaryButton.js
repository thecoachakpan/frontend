import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/common/Button.module.css";

const PrimaryButton = ({ children, className: classStyle, ...other }) => {
  return (
    <Link href="#" passHref>
      <Button className={`${styles.primary} ${classStyle}`} {...other}>
        {children}
      </Button>
    </Link>
  );
};

export default PrimaryButton;
