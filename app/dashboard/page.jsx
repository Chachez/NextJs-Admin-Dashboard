import React from "react";

import Card from "../components/dashboard/card/card";
import Chart from "../components/dashboard/chart/chart";
import RightBar from "../components/dashboard/rightbar/rightbar";
import Transactions from "../components/dashboard/transactions/transactions";

import styles from "../components/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashboard;
