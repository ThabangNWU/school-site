import aboutpic1 from '../assets/about1.png'
import aboutpic2 from '../assets/aboutus2.png'
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className='aboutus__container'>
      <div className="AboutUs-text">
        <h1>ABOUT US</h1>
        <div id="Rectangle"></div>
        <p>
        Lorem ipsum dolor sit amet consectetur. Praesent est lectus vulputate nec sodales placerat egestas dignissim. Malesuada faucibus lorem accumsan sem venenatis imperdiet dolor. Nisl quis semper vulputate habitasse facilisis congue nec. Quis lectus sit velit cras metus.
        </p>
      </div>
      <div className="AboutUs-body">
        <div className="Img">
          <img src= {aboutpic1} />
        </div>
        <div className="Mission">
          <div className='Mission-width'>
          <h3>Our Mission</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur. Sodales vestibulum integer nisl sodales id. Tellus est sit quis at suspendisse in massa egestas. Blandit aliquam sit rhoncus vitae est est justo pellentesque. Duis enim tincidunt proin urna gravida quam commodo malesuada rutrum. Est a nibh ut ac est pellentesque. Molestie tellus lobortis tortor ultricies in dignissim pellentesque proin mattis. Magna pulvinar non praesent at mattis senectus praesent tellus.
            </p>
          </div>
        </div>
        <div className="Vision">
          <div className='Vision-width'>
          <h3>Our Vision</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur. Sodales vestibulum integer nisl sodales id. Tellus est sit quis at suspendisse in massa egestas. Blandit aliquam sit rhoncus vitae est est justo pellentesque. Duis enim tincidunt proin urna gravida quam commodo malesuada rutrum. Est a nibh ut ac est pellentesque. Molestie tellus lobortis tortor ultricies in dignissim pellentesque proin mattis. Magna pulvinar non praesent at mattis senectus praesent tellus.
          </p>
          </div>
        </div>
        <div className="Img">
          <img src={aboutpic2} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
