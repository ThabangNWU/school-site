import { Link } from "react-router-dom";

const PortalSideNavbar = () => {
  return (
    <div className="side__nav__container">
      <div>
        <p>SEBITJA SECONDARY SCHOOL</p>
        <hr></hr>
        <ul>
          <li>
            <Link to='dashboard'>DASHOARD</Link>
          </li>
          <li>
            <Link to="blog">BLOG</Link>
          </li>
          <li>
            <Link to="about">ABOUT</Link>
          </li>
          <li>
            <Link to="contact">CONTACT</Link>
          </li>
          <li>
            <Link to="gallery">GALLERY</Link>
          </li>
        </ul>
      </div>

      <div className="side__nav__container__buttons">
        <button>LOG OUT</button>
        <button>SETTINGS</button>
      </div>
    </div>
  );
};

export default PortalSideNavbar;
