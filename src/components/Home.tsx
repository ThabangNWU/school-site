import { PortalNavbar } from "./PortalNavBar";
import PortalSideNavbar from "./PortalSideNavbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <PortalSideNavbar />
      <div className="home__container__left">
        <PortalNavbar />
        <div className="home__container__content"><Outlet /></div>
      </div>
    </div>
  );
};

export default Home;
