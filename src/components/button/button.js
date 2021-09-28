import React from "react";
import styles from "./button.module.css";

const Button = ({ text, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {text}
  </button>
);

export default Button;
