import React, { Fragment } from "react";
import classes from "./Productpagestyle.module.css";
import phone1 from "../assets/phone/phone-1.webp";
import phone2 from "../assets/phone/phone-2.webp";
import phone3 from "../assets/phone/phone-3.webp";
import phone4 from "../assets/phone/phone-4.webp";
import phone5 from "../assets/phone/phone-5.webp";
import NavbarForCategories from "../Layouts/NavbarForCategories";
import ProductHOC from "./ProductHOC";

const productsArr = [
  {
    id: 'm1',
    name: "Motorola Edge 40",
    price: 100,
    imageUrl: phone1,
    quantity: 1,
  },
  {
    id: 'm2',
    name: "Realme 11 Pro 5G",
    price: 50,
    imageUrl: phone2,
    quantity: 1,
  },
  {
    id: 'm3',
    name: "Vivo T2 Pro 5G",
    price: 70,
    imageUrl: phone3,
    quantity: 1,
  },
  {
    id: 'm4',
    name: "Infinix Zero 30",
    price: 100,
    imageUrl: phone4,
    quantity: 1,
  },
  {
    id: 'm5',
    name: "Realme 11x 5G",
    price: 100,
    imageUrl: phone5,
    quantity: 1,
  },
];
const Mobilepage = () => {
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

export default Mobilepage;
