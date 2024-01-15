import React from "react";

const images = [
  "/assets/IMG_8007.JPG",
  "/assets/IMG_8135.JPG",
  "/assets/IMG_8169.JPG",
  "/assets/IMG_8722.JPG",
  "/assets/IMG_8724.JPG",
  "/assets/IMG_8726.JPG",
  "/assets/IMG_8731.JPG",
  "/assets/IMG_8006.JPG",
  "/assets/IMG_8006.JPG"
];

const Gallery: React.FC = () => {
  const first8Images = images.slice(0, 8);

  return (
   <div className="gallery">
    <div className="gallery__heading">
        <h1>Gallery</h1>
    </div>
     <div className="image__grid">
      {first8Images.map((image) => (
        <img key={image} src={image} alt="Image" />
      ))}
    </div>
    <button className="gallery__button">See More</button>
   </div>
  );
};

export default Gallery;
