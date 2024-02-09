import React from "react";
import classes from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className={classes.footer} id="contact">
      <div className={classes.heading}>
        <h4>LOCATIONS</h4>
        <ul>
          <li>
            <span>Location1:</span>
            <address>911 Gombre court ,tiffin ,OH 445826</address>
          </li>
          <li>
            <span>Location2:</span>
            <address>679 valak complex ,Albaqurque ,NM 632966</address>
          </li>
        </ul>
      </div>
      <div className={classes.heading}>
        <h4>CATEGORIES</h4>
        <ul>
          <li>Mobiles</li>
          <li>Fashion</li>
          <li>Furnitures</li>
          <li>Beauty</li>
          <li>Groceries</li>
        </ul>
      </div>
      <div className={classes.heading}>
        <h4>CONTACT</h4>
        <ul>
          <li>
            <span>PHONE:</span>
            <a href="tel:9876540321">98765 40321</a>
          </li>
          <li>
            <span>E-MAIL:</span>
            <a href="mailto:monkstore@monkmail.com">monkstore@monkmail.com</a>
          </li>
          <li>ON SOCIAL MEDIA:</li>
          <li style={{ display: "flex", justifyContent: "space-around" }}>
            {" "}
            <SocialIcon url="www.twitter.com" />
            <SocialIcon url="www.facebook.com" />
            <SocialIcon url="www.instagram.com" />
            <SocialIcon url="www.pinterest.com" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
