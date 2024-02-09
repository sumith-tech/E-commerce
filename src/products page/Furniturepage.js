import React, { Fragment } from "react";
import classes from "./Productpagestyle.module.css";
import furn1 from "../assets/furniture/furniture-1.webp";
import furn2 from "../assets/furniture/furniture-2.webp";
import furn3 from "../assets/furniture/furniture-3.webp";
import furn4 from "../assets/furniture/furniture-4.webp";
import furn5 from "../assets/furniture/furniture-5.webp";
import NavbarForCategories from "../Layouts/NavbarForCategories";
import ProductHOC from "./ProductHOC";
import Footer from "../pages/Footer";
const productsArr = [
  {
    id: "fr1",
    name: "Jordyblue Marvin 3R Rocking",
    price: 100,
    imageUrl: furn1,
    quantity: 1,
  },
  {
    id: "fr2",
    name: " Multipurpose Table ",
    price: 50,
    imageUrl: furn2,
    quantity: 1,
  },
  {
    id: "fr3",
    name: "BLUEWUD Oleye 2 Door Shoe Rack",
    price: 70,
    imageUrl: furn3,
    quantity: 1,
  },
  {
    id: "fr4",
    name: "KAIZONE Multipurpose Foldable with Cup Holder",
    price: 100,
    imageUrl: furn4,
    quantity: 1,
  },
  {
    id: "fr5",
    name: "Wood King Box Bed",
    price: 100,
    imageUrl: furn5,
    quantity: 1,
  },
];
const Furniturepage = () => {
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

export default Furniturepage;
