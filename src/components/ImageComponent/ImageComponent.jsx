import React from "react";

const ImageComponent = (image) => {
  return (
    <div>
      <img src={image.image} alt="" />
    </div>
  );
};
export default ImageComponent;
