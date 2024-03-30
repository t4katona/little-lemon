import React from "react";
import styles from "./chicago.module.css";
import Button from "../../button/Button";
import HeroImg from "../../../assets/hero-img.svg";
import ChefImg from "../../../assets/chef.png";
import RestaurantImg from "../../../assets/restaurant.png";

export const Chicago = ({ isExtended }) => {
  return (
    <section
      className={`${
        isExtended == false
          ? styles.hero_section
          : `${styles.hero_section} ${styles.extended_hero_section}`
      } general_padding`}
    >
      <div>
        <h1 className="markazi_display">Little Lemon</h1>
        <h2 className="markazi_subtitle">Chicago</h2>
        <p className="karla_lead">
          {isExtended
            ? "Welcome to our family's cherished Mediterranean oasis, where generations of tradition converge with contemporary culinary innovation. With a deep-rooted commitment to preserving authentic flavors, we invite you to savor each dish infused with the essence of our heritage. From the tantalizing aromas wafting from our kitchen to the vibrant colors adorning your plate, every element reflects our passion for excellence. "
            : "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. "}
        </p>
        {isExtended == false && <Button>Reserve a Table</Button>}
      </div>
      <div
        className={`${
          isExtended == false
            ? styles.hero_image_container
            : styles.addtitional_images_container
        }`}
      >
        {isExtended == false ? (
          <img src={HeroImg} alt="hero-image" className={styles.hero_img} />
        ) : (
          <div>
            <img
              src={ChefImg}
              alt="hero-image"
              className={styles.additional_image}
            />
            <img
              src={RestaurantImg}
              alt="hero-image"
              className={styles.additional_image}
            />
          </div>
        )}
      </div>
    </section>
  );
};
