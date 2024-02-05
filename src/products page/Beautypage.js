import React, { Fragment } from "react";
import classes from "./Productpagestyle.module.css";
import beauty1 from "../assets/beauty/beauty-1.webp";
import beauty2 from "../assets/beauty/beauty-2.webp";
import beauty3 from "../assets/beauty/beauty-3.webp";
import NavbarForCategories from "../Layouts/NavbarForCategories";
import ProductHOC from "./ProductHOC";

const productsArr = [
  {
    id: 'b1',
    name: "TRESemme Keratin Smooth Shampoo",
    price: 100,
    imageUrl: beauty1,
    quantity: 1,
  },
  {
    id: 'b2',
    name: "Pears Pure & Gentle Shower Gel",
    price: 50,
    imageUrl: beauty2,
    quantity: 1,
  },
  {
    id: 'b3',
    name: "BLUEWUD Oleye 2 Door Shoe Rack",
    price: 70,
    imageUrl: beauty3,
    quantity: 1,
  },
];

const Beautypage = () => {
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
    </Fragment>
  );
};

export default Beautypage;
