import React, { Fragment } from "react";
import classes from "./Landingpage.module.css";
import Navbar from "../Layouts/Navbar";
import Categories from "./Categories";
import Aboutus from "./Aboutus";
import Footer from "./Footer";

const Landingpage = () => {
  return (
    <Fragment>
      <Navbar />

      <div className={classes.landing} id="home">
        <div className={classes.content1}>
          <h1 className={classes.heading}>Step into Monk's Haven</h1>
          <h3 className={classes.subhead}>
            "Your Ultimate Shopping Destination!"
          </h3>
          <div className={classes.p}>
            <p>
              At Monk Store, we invite you to embark on a journey of mindful
              shopping, where every purchase is infused with intention and
              purpose. As you enter our digital sanctuary, you'll discover a
              harmonious blend of tranquility and innovation, curated to enhance
              your shopping experience.
            </p>
          </div>
        </div>
      </div>

      <Categories />
      <Aboutus />
      <Footer />
    </Fragment>
  );
};

export default Landingpage;
