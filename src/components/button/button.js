import React from "react";
import styles from "./button.module.css";

const Button = ({ text, onPullData }) => (
  <button className={styles.button} onClick={onPullData}>
    {text}
  </button>
);

export default Button;
