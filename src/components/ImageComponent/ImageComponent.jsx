import React from "react";
import Proptypes from "prop-types";
import styles from "./ImageComponent.module.scss";

const ImageComponent = ({ ...props }) => {
  const { image } = props;
  return (
    <div className={styles.imageContainer}>
      <img src={image} alt="" />
    </div>
  );
};

ImageComponent.propTypes = {
  image: Proptypes.string,
};

export default ImageComponent;
