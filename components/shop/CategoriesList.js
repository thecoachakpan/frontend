import Link from "next/link";
import React from "react";
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
import styles from "../../styles/shop/LandingCategoriesAndAds.module.css";

const CategoriesList = () => {
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

  return (
    <div className={styles.main}>
      <div className={styles.categories}>
        <ul>
          {categories &&
            categories.length > 0 &&
            categories.map((category, index) => (
              <Link key={index} href={`/shop/category/${category.slug}`}>
                <a>
                  <li>
                    <div className={styles.icon}>
                      {buildIcon(category.icon)}
                    </div>
                    <div className={styles.text}>{category.name}</div>
                  </li>
                </a>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
