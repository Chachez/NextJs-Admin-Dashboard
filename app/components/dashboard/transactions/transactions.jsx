import React from "react";
import Image from "next/image";

import styles from "./transactions.module.css";

const userData = [
  {
    id: 1,
    userImage: "/noavatar.png",
    name: "Mike Smith",
    status: "Pending",
    date: "14/02/2024",
    amount: 7800,
  },
  {
    id: 2,
    userImage: "/noavatar.png",
    name: "James Bondo",
    status: "Done",
    date: "14/02/2024",
    amount: 850,
  },
  {
    id: 3,
    userImage: "/noavatar.png",
    name: "Jane Joyce",
    status: "Cancelled",
    date: "14/02/2024",
    amount: 803,
  },
  {
    id: 4,
    userImage: "/noavatar.png",
    name: "Grace Yean",
    status: "Done",
    date: "14/02/2024",
    amount: 6500,
  },
  {
    id: 5,
    userImage: "/noavatar.png",
    name: "Kanye West",
    status: "Pending",
    date: "14/02/2024",
    amount: 950,
  },
];

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.userImage}
                    alt="User image"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.name}
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    user.status === "Pending"
                      ? styles.pending
                      : user.status === "Done"
                      ? styles.done
                      : user.status === "Cancelled"
                      ? styles.cancelled
                      : ""
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td>{user.date}</td>
              <td>{user.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
