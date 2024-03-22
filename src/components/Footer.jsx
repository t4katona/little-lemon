import React from "react";
import { Nav } from "./Nav";

export const Footer = () => {
  return (
    <footer>
      <section>
        <h3>Doormat Navigation</h3>
        <Nav />
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h3>Social Media Links</h3>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </section>
    </footer>
  );
};
