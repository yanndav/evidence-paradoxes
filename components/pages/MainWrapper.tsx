import React from "react";
import styles from "./mainwrapper.module.css";
import NavbarWrapper from "./NavbarWrapper";
const MainWrapper = async ({ active, dict, children }) => {
  return (
    <div className={styles.mainwrapper}>
      <NavbarWrapper dict={dict} active={active} />
      {children}
    </div>
  );
};

export default MainWrapper;
