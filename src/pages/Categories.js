import React from "react";
import classes from "./Landingpage.module.css";
import beauty from "../assets/categories/beautyproduct.jpg";
import electronic from "../assets/categories/electronics.jpg";
import fasion from "../assets/categories/Fasion.jpg";
import furniture from "../assets/categories/Furniture.jpg";
import groceries from "../assets/categories/groceries.jpg";
import phone from "../assets/categories/iphone.jpg";
import { Link } from "react-router-dom";
import { memo } from "react";

const Categories = () => {
  const productsArr = [
    {
      id: 1,
      title: "Mobiles",
      price: 100,
      imageUrl: phone,
      quantity: 1,
    },
    {
      id: 2,
      title: "Fashion",
      price: 50,
      imageUrl: fasion,
      quantity: 1,
    },
    {
      id: 3,
      title: "Furnitures",
      price: 70,
      imageUrl: furniture,
      quantity: 1,
    },
    {
      id: 4,
      title: "Beauty",
      price: 100,
      imageUrl: beauty,
      quantity: 1,
    },
    {
      id: 5,
      title: "Electronics",
      price: 100,
      imageUrl: electronic,
      quantity: 1,
    },
    {
      id: 6,
      title: "Groceries",
      price: 50,
      imageUrl: groceries,
      quantity: 1,
    },
  ];
  return (
    <div className={classes.Categories} id="Categories">
      <ul className={classes.allitems}>
        {productsArr.map((item) => (
          <li key={item.id} className={classes.items}>
            <h2 className={classes.title}>{item.title}</h2>
            <Link to={`/categories/${item.title}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className={classes.image}
              ></img>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Categories);
