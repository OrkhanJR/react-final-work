import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const MainPage = () => {
  return (
    <>
      <SideBar />
      <div className="details">
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
