import React from "react";
import styles from "./image.module.css";

const Image = ({ item }) => (
  <img
    style={{ zIndex: item.zIndex }}
    className={styles.image1}
    src={item.src}
    alt=""
  />
);

export default Image;
