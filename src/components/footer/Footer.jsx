import React from "react";
import { Nav } from "../header/nav/Nav";
import styles from "./footer.module.css";
import FooterImg from "../../assets/mario_adrian.png";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} general_padding`}>
      <img src={FooterImg} alt="mario_and_adrian" />
      <section>
        <h3>
          Doormat <br /> Navigation
        </h3>
        <Nav isInHeader={false} />
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>1234 Lemon Street, Lemonville, Lemonland 12345</li>
          <li>(555) 123-4567</li>
          <li>contact@lemons.com</li>
        </ul>
      </section>
      <section>
        <h3>Social Media Links</h3>
        <ul>
          <li>Lemonicious Facebook</li>
          <li>Lemonicious Instagram</li>
          <li>Lemonicious X</li>
        </ul>
      </section>
    </footer>
  );
};
