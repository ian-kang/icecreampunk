import React from "react";

const CheckItem = ({ text, addItem, deleteItem }) => {
  const onCheckBox = (event) => {
    console.log(event.target.name, event.target.checked);
    if (event.target.checked) {
      return addItem(event.target.name);
    }
    deleteItem(event.target.name);
  };
  return (
    <div>
      <input type="checkbox" id={text} name={text} onChange={onCheckBox} />
      <label for={text}>{text}</label>
    </div>
  );
};

export default CheckItem;
