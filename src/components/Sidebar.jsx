import React from "react";
import { Nav } from "./Nav";
import closeButton from "../assets/close.svg";

const Sidebar = ({ show, handleOpen }) => {
  const styles = {
    showMenu: {
      display: show ? "block" : "none",
    },
  };

  return (
    <aside className="sidebar" style={styles.showMenu}>
      <img
        src={closeButton}
        alt="close-menu"
        className="close-icon"
        onClick={handleOpen}
      />
      <Nav isInHeder={false} />
    </aside>
  );
};

export default Sidebar;
