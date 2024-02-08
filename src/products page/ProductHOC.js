import React from "react";
import classes from "./Productpagestyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceAction } from "../Redux/cart-slice";

const ProductHOC = (props) => {
  const { name, price, imageUrl, id, quantity } = props;
  const cartItems = useSelector((state) => state.cart.cartitems);
  const dispatch = useDispatch();

  const addTocartButtonHandler = () => {
    dispatch(
      cartSliceAction.addtoCart({
        name,
        id,
        quantity,
        price,
      })
    );
  };
  console.log(cartItems);
  return (
    <li className={classes.items}>
      <h2 className="text-xl">{name}</h2>
      <img src={imageUrl} alt={name} className={classes.image}></img>
      <p className={classes.pricetag}>${price}</p>
      <button onClick={addTocartButtonHandler} className={classes.button49}>
        Add to cart
      </button>
    </li>
  );
};

export default ProductHOC;
