import React from "react";
import { Nav } from "./Nav";
import closeButton from "../../assets/close.svg";
import styles from "./sidebar.module.css";

const Sidebar = ({ show, handleOpen }) => {
  return (
    <aside className={`${show ? styles.show : styles.hide} ${styles.sidebar}`}>
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
