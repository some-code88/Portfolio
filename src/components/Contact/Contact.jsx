import React from "react";

import styles from "./Contact.module.css";
import { getGithubImageUrl, getContactImageUrl, getEmailImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getEmailImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="duttasomdeep7@gmail.com">My Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getContactImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/somdeep-datta-264258151/">My LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getGithubImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/codeninja79?tab=repositories">My Github</a>
        </li>
      </ul>
    </footer>
  );
};
