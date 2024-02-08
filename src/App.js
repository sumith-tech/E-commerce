import "./App.css";
import Landingpage from "./pages/Landingpage";
import Mobilepage from "./products page/Mobilepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fasionpage from "./products page/Fasionpage";
import Furniturepage from "./products page/Furniturepage";
import Beautypage from "./products page/Beautypage";
import Electronicpage from "./products page/Electronicpage";
import Groceriespage from "./products page/Groceriespage";
import Cart from "./Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { sendCartdata } from "./Redux/cart-actions";
import { getCartdata } from "./Redux/cart-actions";
import Authform from "./Authform/Authform";

let isInitial = true;

const App = () => {
  const iscartopen = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartdata());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      console.log(isInitial);
      return;
    }
    console.log(isInitial);
    if (cart.changed) {
      dispatch(sendCartdata(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {iscartopen && <Cart />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Authform />} />
          <Route path="/categories/#home" element={<Landingpage />} />
          <Route path="/categories/#Categories" element={<Landingpage />} />
          <Route path="/categories/Mobiles" element={<Mobilepage />} />
          <Route path="/categories/Fashion" element={<Fasionpage />} />
          <Route path="/categories/Furnitures" element={<Furniturepage />} />
          <Route path="/categories/Beauty" element={<Beautypage />} />
          <Route path="/categories/Electronics" element={<Electronicpage />} />
          <Route path="/categories/Groceries" element={<Groceriespage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
