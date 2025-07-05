import React, { useState, useEffect, useRef } from "react";


const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((el, index) => (
        <img
          key={index}
          src={el}
          style={{ width: "200px", margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default ImageGallery