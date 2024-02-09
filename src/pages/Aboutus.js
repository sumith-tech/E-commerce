import React from "react";
import classes from "./About.module.css";
const Aboutus = () => {
  return (
    <div className={classes.about} id="about">
      <div>
        <h2 className={classes.heading1}>WHO WE ARE</h2>
      </div>
      <div className={classes.para}>
        <p className={classes.p}>
          At Monk Store, we believe in the power of mindful choices to create
          positive change in the world. Our philosophy is grounded in the
          principles of mindfulness, compassion, and conscious living. We
          understand that every decision we make, no matter how small, has the
          potential to make a difference. That's why we are committed to
          offering products and experiences that align with our values and
          contribute to a more sustainable and harmonious planet.
        </p>
      </div>
      <div>
        <h2 className={classes.heading2}>"MINDFUL CHOICES, CONSCIOUS LIVING"</h2>
      </div>
    </div>
  );
};

export default Aboutus;
