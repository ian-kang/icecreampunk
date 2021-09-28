import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.logo}>ICECREAMPUNKS</h1>
    <div className={styles.navContainer}>
      <button className={styles.button}>
        <Link to="/tweets">NFT Tweets</Link>
      </button>
      <button className={styles.button}>
        <Link to="/icecream">Icecreampunks</Link>
      </button>
      <button className={styles.button}>
        <Link to="/">Coming Soon</Link>
      </button>
    </div>
  </header>
);

export default Header;
