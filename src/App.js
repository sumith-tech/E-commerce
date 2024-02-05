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
import { useSelector } from "react-redux";
import { Fragment } from "react";

const App = () => {
  const iscartopen = useSelector((state) => state.ui.showCart);
  return (
    <Fragment>
      {iscartopen && <Cart />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
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
