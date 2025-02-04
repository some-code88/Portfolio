import React from "react";

import styles from "./Hero.module.css";
import { getHeroImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Somdeep Here</h1>
        <p className={styles.description}>
         I'm a fresh web developer who wants to create modern,responsive and user-friendly websites.
         My main emphasis is on continous learning and personal growth so that I can improve my skillset 
         while also providing value to a team in a professional environment.
        </p>
        <a href="mailto:duttasomdeep7@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getHeroImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
