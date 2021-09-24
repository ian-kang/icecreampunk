import React from "react";
import styles from "./image.module.css";

const Image = ({ item }) => (
  <img
    style={{ zIndex: item.zIndex }}
    className={styles.image}
    src={item.src}
    alt="none"
  />
);

export default Image;
