import Link from "next/link";
import { Notify } from "notiflix";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import styles from "../../styles/shop/Product.module.css";
import { addToCart } from "../../utils/addToCart";
import { currencyFormat, moneyFormat } from "../../utils/helpers";
import { PrimaryButton } from "../common";

const Product = ({ product }) => {
  const [isShownBtn, setIsShownBtn] = useState(false);
  // const { token, isAuthenticated } = useSelector((state) =>
  const dispatch = useDispatch();
  const addProductToCart = () => {
    try {
      // if (!isAuthenticated) return;
      const payload = {
        ...product,
        quantity: 1,
        subTotal: 1 * +product.price,
      };
      addToCart({ dispatch, payload });
      Notify.info("Product added to cart");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={styles.product}
      onMouseEnter={() => setIsShownBtn(true)}
      onMouseLeave={() => setIsShownBtn(false)}>
      <Link href={`/shop/${product.slug}`}>
        <a>
          <div className={styles.image}>
            {product.discount && (
              <div className={styles.discount}>{product.discount}</div>
            )}
            <img className="img-fluid" src={product.image} alt={product.name} />
          </div>
          <div className={`${styles.name} text-truncate`}>{product.name}</div>
          <div className={styles.price}>
            <h5>{moneyFormat(product.price)}</h5>
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
      <div className={styles.btn}>
        {isShownBtn && (
          <PrimaryButton
            onClick={addProductToCart}
            // disabled={!isAuthenticated}
            block
            className="pt-1 pb-1 pl-0 pr-0 d-none d-md-block">
            Add to Cart
          </PrimaryButton>
        )}
        <PrimaryButton
          block
          onClick={addProductToCart}
          className="pt-1 pb-1 pl-0 pr-0 d-md-none">
          Add to Cart
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Product;
