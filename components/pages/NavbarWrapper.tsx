import React from "react";
import styles from "./mainwrapper.module.css";
import LanguageSwitcher from "../home/LanguageSwitcher";

const NavbarWrapper = () => {
  return (
    <div className={styles.navbar}>
      <div>evidence paradoxes</div>
      <div>menu</div>
      <LanguageSwitcher />
    </div>
  );
};

export default NavbarWrapper;
