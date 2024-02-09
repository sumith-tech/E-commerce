import React, { Fragment } from "react";
import classes from "./Productpagestyle.module.css";
import grocery1 from "../assets/groceries/grocery-1.webp";
import grocery2 from "../assets/groceries/grocery-2.webp";
import NavbarForCategories from "../Layouts/NavbarForCategories";
import ProductHOC from "./ProductHOC";
import Footer from "../pages/Footer";

const productsArr = [
  {
    id: "gr1",
    name: "Rajasthani Green Chilli Pickle ",
    price: 100,
    imageUrl: grocery1,
    quantity: 1,
  },
  {
    id: "gr2",
    name: "HyperFoods Diwali Gifts Tropical Dryfruits",
    price: 50,
    imageUrl: grocery2,
    quantity: 1,
  },
];
const Groceriespage = () => {
  return (
    <Fragment>
      <NavbarForCategories />
      <div className="bg-white-500 w-full " id="test">
        <div className={classes.landing}>
          <ul className={classes.allitems}>
            {productsArr.map((item) => (
              <ProductHOC
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Groceriespage;
