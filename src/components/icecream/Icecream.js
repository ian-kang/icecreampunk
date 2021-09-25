import { useEffect, useRef, useState } from "react";
import CheckItem from "../check-item/checkItem";
import DATABASE from "../../localData/imageData.json";
import styles from "./icecream.module.css";
import Layer from "../layer/Layer";

function Icecream() {
  const baseCanvasRef = useRef();
  const downloadRef = useRef();
  const [checkedItemList, setItemList] = useState([]);

  useEffect(() => {
    const baseCanvas = baseCanvasRef.current;
    const context = baseCanvas.getContext("2d");
    context.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
    checkedItemList &&
      checkedItemList.forEach((item) => {
        const img = new Image(); // Create new img element
        img.src = DATABASE[item].src;
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          context.drawImage(img, 0, 0, baseCanvas.width, baseCanvas.height);
          const resultURL = baseCanvas.toDataURL("image/png");
          downloadRef.current.href = resultURL;
        };
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
      <div className={styles.canvasWrapper}>
        <div className={styles.canvasContainer}>
          <canvas ref={baseCanvasRef} className={styles.canvas}></canvas>
        </div>
        <a
          ref={downloadRef}
          className={styles.downloadButton}
          download="Icecreampunk.png"
        >
          <span className={styles.download}>Download</span>

          <i className="fas fa-ice-cream"></i>
        </a>
      </div>
      <div className={styles.layerContainer}>
        <span className={styles.text}>Layers</span>

        {checkedItemList.map((item) => (
          <Layer key={item} name={item} />
        ))}
      </div>
    </div>
  );
}

export default Icecream;
