import React from "react";
import styles from "./testimonialsCard.module.css";
import StarIcon from "../../../../assets/star.svg";
import UserImg from "../../../../assets/user.png";

export const TestimonialCard = () => {
  return (
    <article className={styles.testimonial_card_container}>
      <div className={styles.rating_container}>
        <img src={StarIcon} alt="star-icon" />
        <span className="karla_highlight">9/10</span>
      </div>
      <figure className={styles.user_container}>
        <img src={UserImg} alt="user-image" />
        <figcaption className="karla_highlight">Emily</figcaption>
      </figure>
      <p className="karla_paragraph">Exquisite flavors, impeccable service.</p>
    </article>
  );
};
