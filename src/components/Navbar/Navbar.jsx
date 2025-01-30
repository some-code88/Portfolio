
import React, {useState} from 'react';

import styles from './Navbar.module.css';


import { getMenuIconUrl, getMenuCloseIconUrl } from '../../utils';
export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
             <img className={styles.menuBtn} src={
            menuOpen
              ? (getMenuCloseIconUrl("nav/menuIcon.png"))
              : (getMenuIconUrl("nav/closeIcon.png"))
          } alt='menu-button' 
          onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
                
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                
            </ul>
        </div>
    </nav>
  );
};

export default Navbar