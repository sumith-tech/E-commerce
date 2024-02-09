import { memo } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { uisliceAction } from "../Redux/ui-slice";
import { useSelector } from "react-redux";
const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalquantity);
  const dispatch = useDispatch();

  const setopenCart = () => {
    dispatch(uisliceAction.triggercart());
  };
  return (
    <button
      onClick={setopenCart}
      className=" md:ml-8 h-6 hover:bg-red-400 duraion-500  bg-transparent "
    >
      <div className="cart md:text-blue-100">
        <span className="count">{cartQuantity}</span>

        <FaShoppingCart />
      </div>
    </button>
  );
};

export default memo(CartButton);
