import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "../../styles/shop/SpecialProduct.module.css";
import { currencyFormat } from "../../utils/helpers";

const SpecialProduct = ({ product }) => {
  return (
    <Link href={`/shop/${product.slug}`}>
      <a className={styles.product}>
        <div className={styles.image}>
          {/* <div>
            {product.favorite ? (
              <MdFavorite className={styles.favorite} size={25} />
            ) : (
              <MdFavoriteBorder className={styles.favorite} size={25} />
            )}
          </div> */}
          {product.discount && (
            <div className={styles.discount}>{product.discount}</div>
          )}
          <img className="img-fluid" src={product.image} alt={product.name} />
        </div>
        <div className={`${styles.name} text-truncate`}>{product.name}</div>
        <div className={styles.price}>
          <h5>{currencyFormat(product.price)}</h5>
          {product.discountPrice && (
            <h6>{currencyFormat(product.discountPrice)}</h6>
          )}
        </div>
        <div className={styles.rating}>
          <ReactStars
            count={5}
            value={product.rating}
            edit={false}
            size={18}
            activeColor="#ffd700"
          />
        </div>
      </a>
    </Link>
  );
};

export default SpecialProduct;
