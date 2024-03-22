import React from "react";
import { Nav } from "../components/Nav";
import Logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="little-lemon-logo" />
      <Nav />
    </header>
  );
};
