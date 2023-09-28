import React from 'react';

const Footer : React.FC= () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="follow-us">
          <h4>FOLLOW US</h4>
          <h5>Yes, We are social</h5>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="logo">
          <h5>L  O  G  O</h5>
        </div>
        <div className="contact">
          <h4>CONTACT US</h4>
          <p>school@gmail.com</p>
          <p>41 Juta Street Braamfontain</p>
          <p>Johannesburg, 2001</p>
        </div>
      </div>
      <div className="footer-text">
        <hr />
        <p>&copy; School name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;