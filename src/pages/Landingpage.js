import React, { Fragment } from "react";
import classes from "./Landingpage.module.css";
import Navbar from "../Layouts/Navbar";
import Categories from "./Categories";

const Landingpage = () => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
   
  ];
  return (
    <Fragment>
      <Navbar />

      <div className={classes.landing} id="home">
        <ul className={classes.allitems}>
          {productsArr.map((item) => (
            <li key={item.id} className={classes.items}>
              <h2 className="text-xl">{item.title}</h2>
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className={classes.image}
              ></img>
            </li>
          ))}
        </ul>
      </div>

      <Categories />
    </Fragment>
  );
};

export default Landingpage;
