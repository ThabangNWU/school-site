// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact">
          <h4>CONTACT US</h4>
          <p>school@gmail.com</p>
          <p>41 Juta Street Braamfontain</p>
          <p>Johannesburg,2001</p>
        </div>
        <div className="logo">
          <h5>LOGO</h5>
        </div>
        <div className="follow-us">
          <h4>FOLLOW US</h4>
          <h5>Yes,We are social</h5>
          <div className="social-icons">
            {/* social media icons */}
            <img src="src/assets/twitter-icon.png" alt="Twitter" />
            <img src="src/assets/facebook-icon.png" alt="Facebook" />
            <img src="src/assets/instagram-icon .png" alt="Instagram" />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-text">
        <p>&copy; School Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
