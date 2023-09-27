import React from "react";

const About = () => {
  const handleAboutUs = () => {};

  const handleOurMission = () => {};

  const handleOurVision = () => {};

  return (
    <div>
      <p>About us</p>
      <input type="text"></input>
      <button onClick={() => handleAboutUs()}>Save</button>

      <p>Our Mission</p>
      <input type="text"></input>
      <button onClick={() => handleOurMission()}>Save</button>

      <p>Our Vision</p>
      <input type="text"></input>
      <button onClick={() => handleOurVision()}>Save</button>
    </div>
  );
};

export default About;
