import React from "react";
import styles from './ImageComponent.module.scss'

const ImageComponent = (image) => {
  return (
    <div className={styles.imageContainer}>
      <img src={image.image} alt="" />
    </div>
  );
};
export default ImageComponent;
