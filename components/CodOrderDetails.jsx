import styles from "../styles/CodOrderDetails.module.css";
import React, { useState } from "react";

function CodOrderDetails({ total, createOrderNow ,setCODOpen, openCOD}) {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  // const [open,setOpen] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    createOrderNow({ customer, address, total, method: 0 });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <span style={{fontSize:"20px", cursor:"pointer"}} onClick={() => setCODOpen(false)}>X</span>
        <h1 className={styles.title}>You will pay ${total} after delivery</h1>
        <form onSubmit={handleClick} className={styles.form}>
          <div className={styles.item}>
            <label className={styles.label}>Name Surname</label>
            <input
              placeholder="John doe"
              type="text"
              className={styles.input}
              onChange={(e) => setCustomer(e.target.value)}
              required
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label>
            <input
              placeholder="For eg - 9891231255"
              type="text"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea
              rows={5}
              placeholder="Address"
              type="text"
              className={styles.textarea}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CodOrderDetails;
