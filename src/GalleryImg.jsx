const ImageGallery = ({img,selectedBreed}) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: 20,
        }}
      >
        {img.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={selectedBreed}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ImageGallery