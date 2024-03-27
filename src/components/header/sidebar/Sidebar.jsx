import React from "react";
import { Nav } from "../nav/Nav";
import closeButton from "../../../assets/close.svg";
import styles from "./sidebar.module.css";

const Sidebar = ({ show, handleOpen }) => {
  return (
    <aside className={`${show ? styles.show : styles.hide} ${styles.sidebar}`}>
      <img
        src={closeButton}
        alt="close-menu"
        className={styles.close_icon}
        onClick={handleOpen}
      />
      <Nav isInHeder={false} />
    </aside>
  );
};

export default Sidebar;
