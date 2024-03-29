import React from "react";
import { Chicago } from "./chicago/Chicago";
import Button from "../button/Button";
import styles from "./main.module.css";
import { SpecialsCard } from "./cards/specials/SpecialsCard";

import GreekSaladImg from "../../assets/greek_salad.svg";
import BruchettaImg from "../../assets/bruchetta.svg";
import LemonDessertImg from "../../assets/lemon-dessert.svg";

export const Main = () => {
  return (
    <main>
      <Chicago />
      <section className="general_padding">
        <header className={`${styles.section_header}`}>
          <h3 className="karla_section_title">This Weeks Specials!</h3>
          <Button>Online Menu</Button>
        </header>
        <main className={styles.specials_section}>
          <SpecialsCard
            name="Greek salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
            img={GreekSaladImg}
          />
          <SpecialsCard
            name="Bruchetta"
            price="$ 5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
            img={BruchettaImg}
          />
          <SpecialsCard
            name="Lemon Dessert"
            price="$ 5.00"
            description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            img={LemonDessertImg}
          />
        </main>
      </section>
    </main>
  );
};
