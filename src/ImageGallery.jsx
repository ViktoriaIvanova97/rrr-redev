import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: " 10px",
      }}
    >
      {images.map((el, index) => (
        <img key={index} src={el} style={{ width: "200px", margin: "10px" }} />
      ))}
    </div>
  );
};

export default ImageGallery;
