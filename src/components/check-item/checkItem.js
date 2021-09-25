import React from "react";
import styles from "./checkItem.module.css";

const CheckItem = ({ text, addItem, deleteItem }) => {
  const onCheckBox = (event) => {
    console.log(event.target.name, event.target.checked);
    if (event.target.checked) {
      return addItem(event.target.name);
    }
    deleteItem(event.target.name);
  };
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" id={text} name={text} onChange={onCheckBox} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};

export default CheckItem;
