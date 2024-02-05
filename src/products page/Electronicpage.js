import React, { Fragment } from "react";
import classes from "./Productpagestyle.module.css";
import electronic1 from "../assets/electronics/electronic-1.webp";
import electronic2 from "../assets/electronics/electronic-2.webp";
import electronic3 from "../assets/electronics/electronic-3.webp";
import NavbarForCategories from "../Layouts/NavbarForCategories";
import ProductHOC from "./ProductHOC";

const productsArr = [
  {
    id: 'e1',
    name: "MOTOROLA EnvisionX Google TV ",
    price: 100,
    imageUrl: electronic1,
    quantity: 1,
  },
  {
    id: 'e2',
    name: "SONY ZV-1F Vlog Camera",
    price: 50,
    imageUrl: electronic2,
    quantity: 1,
  },
  {
    id: 'e3',
    name: "Realme TWS",
    price: 70,
    imageUrl: electronic3,
    quantity: 1,
  },
];

const Electronicpage = () => {
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

export default Electronicpage;
