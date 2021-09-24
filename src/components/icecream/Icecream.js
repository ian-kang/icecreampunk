import { useEffect, useRef, useState } from "react";
import CheckItem from "../check-item/checkItem";
import DATABASE from "../../localData/imageData.json";
import styles from "./icecream.module.css";
import Layer from "../layer/Layer";

function Icecream() {
  const baseCanvasRef = useRef();
  const [checkedItemList, setItemList] = useState([]);
  useEffect(() => {
    const baseCanvas = baseCanvasRef.current;
    const context = baseCanvas.getContext("2d");
    context.fillStyle = "#ffa1de";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    checkedItemList &&
      checkedItemList.forEach((item) => {
        const img = new Image(); // Create new img element
        img.src = DATABASE[item].src;
        img.crossOrigin = "Anonymous";
        img.addEventListener(
          "load",
          () => {
            context.drawImage(img, 0, 0);
          },
          false
        );
      });
  });
  // draw the image on canvas
  function addItem(item) {
    setItemList([...checkedItemList, item]);
  }

  function deleteItem(item) {
    const updatedItems = checkedItemList.filter((element) => element !== item);
    setItemList(updatedItems);
  }

  const totalItems = Object.keys(DATABASE);

  return (
    <div className={styles.body}>
      <div className={styles.checkItemContainer}>
        {totalItems.map((item) => (
          <CheckItem
            key={item}
            text={item}
            addItem={addItem}
            deleteItem={deleteItem}
          />
        ))}
      </div>
      <div className={styles.canvasContainer}>
        <canvas
          ref={baseCanvasRef}
          className={styles.canvas}
          width="500"
          height="500"
        ></canvas>
      </div>
      <div className={styles.layerContainer}>
        {checkedItemList.map((item) => (
          <Layer key={item} name={item} />
        ))}
      </div>
    </div>
  );
}

export default Icecream;
