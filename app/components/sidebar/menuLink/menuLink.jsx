"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

//Custom Imports
import styles from "./menuLink.module.css";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
