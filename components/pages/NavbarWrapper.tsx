import React from "react";
import styles from "./mainwrapper.module.css";
import LanguageSwitcher from "../home/LanguageSwitcher";
import Menu from "../home/Menu";
import Title from "../home/Title";
import Link from "next/link";
const NavbarWrapper = ({ dict, active }) => {
  return (
    <div className={styles.navbar}>
      <Link href={`/${dict.lang}`} className={styles.homelink}>
        {" "}
        <Title dict={dict} homepage={false} />
      </Link>
      <Menu dict={dict} active={dict[active]?.title} homepage={false} />
      <LanguageSwitcher />
    </div>
  );
};

export default NavbarWrapper;
