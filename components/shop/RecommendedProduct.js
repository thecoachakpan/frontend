import Link from "next/link";
import { Notify } from "notiflix";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch } from "react-redux";
import styles from "../../styles/shop/RecommendedProduct.module.css";
import { addToCart } from "../../utils/addToCart";
import { currencyFormat } from "../../utils/helpers";
import { PrimaryButton } from "../common";

const Recommended = ({ product }) => {
  // const [isShownBtn, setIsShownBtn] = useState(false);
  const dispatch = useDispatch();
  const addProductToCart = () => {
    try {
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
      className={`${styles.product} `}
      // onMouseEnter={() => setIsShownBtn(true)}
      // onMouseLeave={() => setIsShownBtn(false)}
    >
      <div className={styles.heading}>
        {/* <div>
          {product.favorite ? (
            <MdFavorite size={25} />
          ) : (
            <MdFavoriteBorder size={25} />
          )}
        </div> */}
        {product.discount && (
          <div className={styles.discount}>{product.discount}</div>
        )}
      </div>
      <Link href="/shop/samsung">
        <a className={styles.image}>
          <img className="img-fluid" src={product.image} alt={product.name} />
        </a>
      </Link>
      <div className="d-flex justify-content-between mt-2">
        <div className="pb-1">
          <div className={styles.price}>
            <h5>{currencyFormat(product.price)}</h5>
          </div>
          <div className={`${styles.name} text-truncate`}>{product.name}</div>
        </div>
        <div className={styles.btn}>
          <PrimaryButton
            block
            onClick={addProductToCart}
            className="pt-1 pb-1 pl-2 pr-2">
            <span className="d-none d-md-inline">Add to cart</span>
            <CgShoppingCart className="d-md-none" size="16" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
