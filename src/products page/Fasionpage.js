import React, { Fragment } from "react";
import classes from "./Productpagestyle.module.css";
import fashion1 from "../assets/fasion/fashion-1.webp";
import fashion2 from "../assets/fasion/fashion-2.webp";
import fashion3 from "../assets/fasion/fashion-3.webp";
import fashion4 from "../assets/fasion/fashion-4.webp";
import fashion5 from "../assets/fasion/fashion-5.webp";
import NavbarForCategories from "../Layouts/NavbarForCategories";
import ProductHOC from "./ProductHOC";
import Footer from "../pages/Footer";

const productsArr = [
  {
    id: "f1",
    name: "AUSK Printed Men Hooded",
    price: 100,
    imageUrl: fashion1,
    quantity: 1,
  },
  {
    id: "f2",
    name: "LEWEL Typography Men Hooded",
    price: 50,
    imageUrl: fashion3,
    quantity: 1,
  },
  {
    id: "f3",
    name: "Jump Cuts Solid Men Round Neck",
    price: 70,
    imageUrl: fashion2,
    quantity: 1,
  },
  {
    id: "f4",
    name: "Rich Club Round Sunglasses Black ",
    price: 100,
    imageUrl: fashion4,
    quantity: 1,
  },
  {
    id: "f5",
    name: "VECTOR X Blaster Cricket Shoes",
    price: 100,
    imageUrl: fashion5,
    quantity: 1,
  },
];

const Fasionpage = () => {
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

export default Fasionpage;
