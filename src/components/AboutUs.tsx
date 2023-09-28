import aboutpic1 from "../assets/IMG_8007.jpg";
import aboutpic2 from "../assets/IMG_8006.jpg";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-text">
        <h1>ABOUT US</h1>
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa
          quidem, molestias doloribus asperiores voluptate architecto natus,
          <br />
          commodi nobis numquam nesciunt? Repellat libero provident quos soluta
          corporis facilis hic omnis!
        </p>
      </div>
      <div className="AboutUs-body">
        <div className="Mission-section">
          <img src={aboutpic1} />
          <div className="Mission">
            <h3>Our Mission</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quos nam libero ducimus impedit accusantium ea ipsam tempore,
              voluptas neque inventore atque dolorum! Fuga pariatur, voluptatem
              voluptate perspiciatis similique culpa.
            </p>
          </div>
        </div>

        <div className="Vision-section">
          <div className="Vision">
            <h3>Our Vision</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quos nam libero ducimus impedit accusantium ea ipsam tempore,
              voluptas neque inventore atque dolorum! Fuga pariatur, voluptatem
              voluptate perspiciatis similique culpa.
            </p>
          </div>
          <img src={aboutpic2} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
