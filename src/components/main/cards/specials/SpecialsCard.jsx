import React from "react";
import CourierIcon from "../../../../assets/courier.svg";
import styles from "./specialsCard.module.css";

export const SpecialsCard = ({ name, price, description, img }) => {
  return (
    <article className={styles.specials_card_container}>
      <img src={img} alt="greek-salad" className={styles.specials_card_img} />
      <div className={styles.specials_infos_container}>
        <header>
          <h4 className="karla_card_title">{name}</h4>
          <span className="karla_highlight">{price}</span>
        </header>
        <main>
          <p className="karla_highlight">{description}</p>
        </main>
        <footer>
          <span className="karla_lead">Order a delivery</span>
          <img src={CourierIcon} alt="courier-icon" />
        </footer>
      </div>
    </article>
  );
};
