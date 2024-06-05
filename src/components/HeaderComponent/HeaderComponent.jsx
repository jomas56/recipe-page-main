import React from "react";
import styles from "./HeaderComponent.module.scss";

const HeaderComponent = ({ heading, subHeading, variant }) => {
  console.log(variant);
  return (
    <div
      className={variant === "pageHeader" ? styles.pageHeader : styles.heading}
    >
      {variant === "pageHeader" ? <h1>{heading}</h1> : <h2>{heading}</h2>}
      {subHeading && <p>{subHeading}</p>}
    </div>
  );
};

export default HeaderComponent;
