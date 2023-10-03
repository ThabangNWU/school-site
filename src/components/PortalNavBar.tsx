import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import profilePicture from "../assets/me.jpg";
import { useContext } from "react";
import { MyContext } from "../App";

export const PortalNavbar = () => {
  const { email } = useContext(MyContext);
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="split">
          <div className="navbar__breadcrumb">
            <AiOutlineMenu />
          </div>
          <div className="navbar__profile">
            <img
              src={profilePicture}
              className="navbar__profile-picture"
              alt="image"
            />
            <p className="navbar__profile_name">{email}</p>
            <AiOutlineDown className="chevron-down" />
          </div>
        </div>
      </div>
    </div>
  );
};
