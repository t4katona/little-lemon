import React from "react";
import styles from "./nav.module.css";

export const Nav = ({ isInHeader }) => {
  return (
    <nav
      className={`${isInHeader ? styles.nav_header : styles.nav_footer} ${
        styles.nav
      }`}
    >
      <ul className="karla_highlight">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li>
        <li>
          <a href="#orderonline">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};
