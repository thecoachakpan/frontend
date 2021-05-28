import { CART_ADD_ITEM } from "../store/types/cartTypes";

export const addToCart = ({ dispatch, payload }) => {
  try {
    // if (!isAuthenticated) return;
    dispatch({
      type: CART_ADD_ITEM,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};
