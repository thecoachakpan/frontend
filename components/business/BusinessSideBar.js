import Link from "next/link";
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BsCheckCircle, BsHouseDoor } from "react-icons/bs";
import { IoMdGlobe } from "react-icons/io";
import { IoAdd, IoCartOutline, IoLocation } from "react-icons/io5";
import { RiBankFill, RiHandCoinLine, RiUser4Fill } from "react-icons/ri";
import { SiCashapp } from "react-icons/si";
import { VscLoading } from "react-icons/vsc";
import styles from "../../styles/business/components/sidebar.module.css";
import { businessRoutes } from "../../utils/routes";

const BusinessSideBar = () => {
  return (
    <div className={`${styles.sidebar} d-none d-md-block`}>
      <div className={styles.logo}>
        <img
          src="/images/logo.png"
          className="img-fluid"
          alt="pinchpayer logo"
        />
      </div>
      <div className={styles.menus}>
        <div className={styles.section}>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <BsHouseDoor size="18" />
                </span>
                Home
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>CATALOGUE</div>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <IoCartOutline size="18" />
                </span>
                My Products
              </div>
            </a>
          </Link>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <IoAdd size="18" />
                </span>
                Add Product
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>ORDER</div>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <RiHandCoinLine size="18" />
                </span>
                Open
              </div>
            </a>
          </Link>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <VscLoading size="18" />
                </span>
                Pending
              </div>
            </a>
          </Link>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <BsCheckCircle size="18" />
                </span>
                Completed
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>ACCOUNT</div>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <SiCashapp size="18" />
                </span>
                Withdraw
              </div>
            </a>
          </Link>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <IoMdGlobe size="18" />
                </span>
                API
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.section}>
          <div className={styles.header}>PERSONAL</div>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <IoLocation size="18" />
                </span>
                Address
              </div>
            </a>
          </Link>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <RiBankFill size="18" />
                </span>
                Bank Account
              </div>
            </a>
          </Link>
          <Link href={businessRoutes.BUSINESS_HOME}>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <RiUser4Fill size="18" />
                </span>
                Profile
              </div>
            </a>
          </Link>
          <Link href="/logout" passHref>
            <a>
              <div className={styles.menu}>
                <span className={styles.icon}>
                  <AiOutlineLogin size="17" />
                </span>
                Logout
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessSideBar;
