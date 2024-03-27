import React, { useState } from "react";
import { Nav } from "./nav/Nav";
import Logo from "../../assets/Logo.svg";
import HamburgerIcon from "../../assets/menu.svg";
import Sidebar from "./sidebar/Sidebar";
import styles from "./header.module.css";

export const Header = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  const handleSidebarDisplay = () => {
    setIsSidebarShown(!isSidebarShown);
  };

  return (
    <header className={`${styles.header} general_padding`}>
      <img className={styles.logo} src={Logo} alt="little-lemon-logo" />
      <img
        className={styles.menu_icon}
        src={HamburgerIcon}
        alt="menu-icon"
        onClick={handleSidebarDisplay}
      />
      <Sidebar show={isSidebarShown} handleOpen={handleSidebarDisplay} />
      <Nav isInHeader={true} />
    </header>
  );
};
