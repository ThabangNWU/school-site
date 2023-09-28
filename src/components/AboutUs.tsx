import aboutpic1 from '../assets/about1.png'
import aboutpic2 from '../assets/aboutus2.png'
const AboutUs = () => {
    return (
      <div className="AboutUs">
          <div className="AboutUs-text">
              <h1>ABOUT US</h1>
              <div id="Rectangle"></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                   Odio ipsa quidem, molestias doloribus asperiores voluptate 
                   architecto natus, commodi nobis numquam nesciunt?
                   Repellat libero provident quos soluta corporis facilis
                   hic omnis!</p>
          </div>
  <div className="AboutUs-body">
    <div className="Mission-section">
      <img src="" />
      <div className="Mission">
          <h3>Our Mission</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Magnam quos nam libero ducimus impedit accusantium ea 
              ipsam tempore, voluptas neque inventore atque dolorum! 
              Fuga pariatur, voluptatem voluptate perspiciatis similique
               culpa.
          </p>
      </div>
      </div>
      
      <div className="Vision-section">
      <div className="Vision">
          <h3>Our Vision</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Magnam quos nam libero ducimus impedit accusantium ea 
              ipsam tempore, voluptas neque inventore atque dolorum! 
              Fuga pariatur, voluptatem voluptate perspiciatis similique
               culpa.
          </p>
          </div>
        </div>
        <div className="Img">
          <img src={aboutpic2} alt="" />
        </div>
      </div>
      <img src="" alt=""/>
  </div>

  </div>
      </div>
    </div>
  );
};

export default AboutUs;
