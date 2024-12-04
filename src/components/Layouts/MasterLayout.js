import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import { setToggleNav } from "@/features/redux/slices/themeSlice";

import SideNav from "./SideNav";

const MasterLayout = ({ children }) => {
  // redux store
  const toggleNav = useSelector((state) => state.theme.toggleNav);

  // daclare dispatch
  const dispatch = useDispatch();

  return (
    <div
      className={`w-full h-screen transition-all bg-white  ${
        toggleNav ? "max-h-screen overflow-hidden " : ""
      } `}
    >
      <div
        className={`${
          toggleNav ? "block fixed top-0 left-0 w-[80%] h-screen" : "hidden"
        } p-5`}
      >
        {/* Sidenav menus  */}
        <SideNav />
      </div>

      <div
        className={`relative  w-full transition-all duration-200 bg-white ${
          toggleNav
            ? "transform scale-[0.6] h-[1200px] translate-x-[60%] translate-y-[-13%] rounded-xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            : ""
        }`}
      >
        {/* overlay  */}

        <div
          className={` ${
            toggleNav ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-[1200px] bg-transparent z-[99999]`}
          onClick={() => dispatch(setToggleNav(false))}
        ></div>

        {/* header  */}
        <Header />

        {/* main content  */}
        <div className="min-h-[80vh]">{children}</div>
        {/* mx-auto max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl  */}

        {/* footer  */}
        <div className="hidden md:block">
          <Footer />
        </div>

        {/* mobile nav  */}
        <MobileNav />
      </div>
    </div>
  );
};

export default MasterLayout;
