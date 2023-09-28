import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images =[
 "./src/assets/IMG_8007.JPG",
 "./src/assets/IMG_8135.JPG",
 "./src/assets/IMG_8169.JPG",
 "./src/assets/IMG_8722.JPG",
 "./src/assets/IMG_8724.JPG",
 "./src/assets/IMG_8726.JPG",
 "./src/assets/IMG_8731.JPG",
 "./src/assets/IMG_8006.JPG",
 "./src/assets/IMG_8006.JPG",

]

const Gallery = () => {
  return (
    <div>
        <h1>Gallery</h1>

        <ResponsiveMasonry
             columnsCountBreakPoints={{350 : 1 , 750:2, 900 : 3}}>
          <Masonry>
           {images.map((image, i ) => (
            <img 
            key={i}
            src={image}
            style={{width:"100%",display:"grid"}}
            alt=""
            />
           ))} 
            </Masonry> 
          
        </ResponsiveMasonry>
        </div>
  );
};

export default Gallery