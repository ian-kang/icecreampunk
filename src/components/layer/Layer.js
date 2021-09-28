import React, { useRef } from "react";
import styles from "./layer.module.css";

const Layer = ({ name, index, checkedItemList, setItemList }) => {
  const draggingItem = useRef();
  const dragOverItem = useRef();

  function dragStart_handler(event, position) {
    draggingItem.current = position;
    console.log("dragstart", event.target.innerHTML);
  }

  function dragEnter_handler(event, position) {
    dragOverItem.current = position;
    console.log("dragenter", event.target.innerHTML);
    const listCopy = [...checkedItemList];
    console.log(draggingItem.current, dragOverItem.current);
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setItemList(listCopy);
  }

  return (
    <div className={styles.layerBar}>
      <button
        className={styles.button}
        draggable
        onDragStart={(e) => dragStart_handler(e, index)}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => dragEnter_handler(e, index)}
      >
        <span className={styles.text}>{name}</span>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};

export default Layer;
