import React, { useState } from "react";
import { Nav } from "../components/Nav";
import Logo from "../assets/Logo.svg";
import HamburgerIcon from "../assets/menu.svg";
import Sidebar from "./Sidebar";

export const Header = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  const handleSidebarDisplay = () => {
    setIsSidebarShown(!isSidebarShown);
  };

  return (
    <header>
      <img className="logo" src={Logo} alt="little-lemon-logo" />
      <img
        className="menu-icon"
        src={HamburgerIcon}
        alt="menu-icon"
        onClick={handleSidebarDisplay}
      />
      <Sidebar show={isSidebarShown} handleOpen={handleSidebarDisplay} />
      <Nav isInHeader={true} />
    </header>
  );
};
