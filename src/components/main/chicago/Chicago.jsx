import React from "react";
import styles from "./chicago.module.css";
import Button from "../../button/Button";
import HeroImg from "../../../assets/hero-img.svg";

export const Chicago = () => {
  return (
    <section className={`${styles.hero_section} general_padding`}>
      <div>
        <h1 className="markazi_display">Little Lemon</h1>
        <h2 className="markazi_subtitle">Chicago</h2>
        <p className="karla_lead">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button>Reserve a Table</Button>
      </div>
      <div className={styles.hero_image_container}>
        <img src={HeroImg} alt="hero-image" className={styles.hero_img} />
      </div>
    </section>
  );
};
