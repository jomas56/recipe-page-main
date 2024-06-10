import React from "react";
import Proptypes from "prop-types";
import styles from "./HeaderComponent.module.scss";

const HeaderComponent = ({ ...props }) => {
  const { heading, subHeading, variant } = props;
  return (
    <div
      className={variant === "pageHeader" ? styles.pageHeader : styles.heading}
    >
      {variant === "pageHeader" ? <h1>{heading}</h1> : <h2>{heading}</h2>}
      {subHeading && <p>{subHeading}</p>}
    </div>
  );
};

HeaderComponent.propTypes = {
  heading: Proptypes.string,
  subHeading: Proptypes.string,
  variant: Proptypes.string,
};
export default HeaderComponent;
