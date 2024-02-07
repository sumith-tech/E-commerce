import { cartSliceAction } from "./cart-slice"; //action creator Thunk

export const getCartdata = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        "https://monk-store-555be-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("not get cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await getRequest();
      dispatch(
        cartSliceAction.replaceCart({
          cartitems: cartData.cartitems || [],
          totalquantity: cartData.totalquantity,
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const sendCartdata = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://monk-store-555be-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cartitems: cart.cartitems,
            totalquantity: cart.totalquantity,
          }),
        }
      );
      if (!response.ok) {
        console.log("success");
      }
    };
    try {
      await sendRequest();
    } catch (err) {
      console.log(err.message);
    }
  };
};
