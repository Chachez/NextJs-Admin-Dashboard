import React from "react";

//Custom imports
import SideBar from "../components/sidebar/sidebar";
import NavBar from "../components/navbar/navbar";
import styles from "../components/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
