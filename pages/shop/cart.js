import Link from "next/link";
import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  NavSpacer,
  OutlinePrimaryButton,
  PrimaryButton,
} from "../../components/common";
import { CART_REMOVE_ITEM } from "../../store/types/cartTypes";
// import { products } from "../../dummy/products";
import styles from "../../styles/shop/Cart.module.css";

const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);

  useEffect(() => {
    return () => {};
  }, []);

  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    try {
      dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.cart}>
      <NavSpacer />
      <section>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1>Your cart</h1>
            </Col>
            <Col className="text-right">
              {/* <PrimaryButton className="pt-2 pb-2">Continue</PrimaryButton> */}
              <Link href="/shop">
                <a>
                  <OutlinePrimaryButton className=" pt-2 pb-2 mr-2">
                    CONTINUE
                  </OutlinePrimaryButton>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.productlist}>
        <Container>
          {cart && cart.length > 0 ? (
            <>
              <Card
                className={`${styles.productheader} border-0 font-weight-bold`}>
                <Card.Body className="d-flex">
                  <div className={styles.imageBox}>
                    {/* <div className={styles.image}></div> */}
                  </div>
                  <div className={styles.details}>
                    <div className={styles.name}>ITEM</div>
                    {/* <div className={styles.no}>#136454656876</div>
                    <div className={styles.quantity}>Quantity: 2</div> */}
                  </div>
                  <div className={styles.smallscreenprice}>PRICE</div>
                  <div className={styles.price}>UNIT</div>
                  <div className={styles.subtotal}>SUBTOTAL</div>
                </Card.Body>
              </Card>
              {cart.map((product, index) => (
                <Card key={index} className={styles.product}>
                  <div
                    className={styles.removeBox}
                    onClick={() => removeFromCart(product.id)}>
                    <MdCancel
                      size="24"
                      className={styles.remove}
                      color="white"
                    />
                  </div>
                  <Card.Body
                    className="d-flex justify-content-aroundd"
                    style={{ padding: "1rem" }}>
                    <div className={styles.imageBox}>
                      <div className={styles.image}>
                        <img className="img-fluid" src={product.image} alt="" />
                      </div>
                    </div>
                    <div className={styles.details}>
                      <div className={styles.name}>{product.name}</div>
                      <div className={styles.no}>#136454656876</div>
                      <div className={styles.quantity}>
                        Quantity: {product.quantity}
                      </div>
                      <div className={`d-md-none ${styles.smallscreenprice}`}>
                        Unit Price: ₦{product.price}
                      </div>
                    </div>
                    <div className={styles.price}> {product.quantity}</div>
                    <div className={styles.price}>₦{product.price}</div>
                    <div className={styles.smallscreensubtotal}>
                      <span>₦{+product.subTotal}</span>
                    </div>
                    <div className={styles.subtotal}>₦{+product.subTotal}</div>
                  </Card.Body>
                </Card>
              ))}
              <Card
                className={`${styles.productheader} border-0 font-weight-bold`}>
                <Card.Body className="d-flex">
                  <div className={styles.imageBox}>
                    {/* <div className={styles.image}></div> */}
                  </div>
                  <div className={styles.details}>
                    <div className={styles.total}>TOTAL</div>
                    {/* <div className={styles.no}>#136454656876</div>
                    <div className={styles.quantity}>Quantity: 2</div> */}
                  </div>
                  <div className={styles.price}></div>
                  <div className={styles.total}>₦{total}</div>
                </Card.Body>
              </Card>
              <Row className="align-items-center">
                <Col>{/* <h1>Your cart</h1> */}</Col>
                <Col xs={12} className="text-right">
                  <Link href="/shop">
                    <a>
                      <OutlinePrimaryButton className=" pt-2 pb-2 mr-2">
                        CONTINUE
                      </OutlinePrimaryButton>
                    </a>
                  </Link>
                  <Link href="/shop/checkout">
                    <a>
                      <PrimaryButton className="pt-2 pb-2">
                        CHECKOUT
                      </PrimaryButton>
                    </a>
                  </Link>
                </Col>
              </Row>
            </>
          ) : (
            <div className={styles.empty}>
              <div className="text-center">
                <div className={styles.image}>
                  <AiOutlineShoppingCart size="150" />
                </div>
                <h5 className="mt-5 mb-5">Unfortunately, your cart is empty</h5>
                <Link href="/shop">
                  <a>
                    <PrimaryButton className=" pt-2 pb-2 mr-2">
                      CONTINUE SHOPPING
                    </PrimaryButton>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

Cart.layout = "shop";

export default Cart;
