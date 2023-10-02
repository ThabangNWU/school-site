import React from "react";

const AboutUsPortal = () => {
  const handleAboutUs = () => {};

  const handleOurMission = () => {};

  const handleOurVision = () => {};

  return (
    <div className="about">
      <p className="about__title">About us</p>
      <div className="about__content">
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
    </div>
  );
};

export default AboutUsPortal;
