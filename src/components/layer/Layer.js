import React from "react";
import styles from "./layer.module.css";

const Layer = ({ name }) => (
  <div className={styles.layerBar}>
    <button className={styles.button}>
      <span className={styles.text}>{name}</span>
      <i className="fas fa-bars"></i>
    </button>
  </div>
);
export default Layer;
