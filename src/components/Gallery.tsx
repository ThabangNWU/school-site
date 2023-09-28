const images = [
  "./src/assets/IMG_8007.JPG",
  "./src/assets/IMG_8135.JPG",
  "./src/assets/IMG_8169.JPG",
  "./src/assets/IMG_8722.JPG",
  "./src/assets/IMG_8724.JPG",
  "./src/assets/IMG_8726.JPG",
  "./src/assets/IMG_8731.JPG",
  "./src/assets/IMG_8006.JPG",
  "./src/assets/IMG_8006.JPG",
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      {images.map((image, i) => (
        <img
          className="gallery__image"
          key={i}
          src={image}
          style={{ width: "50%", display: "grid" }}
          alt=""
        />
      ))}
    </div>
  );
};

export default Gallery;
