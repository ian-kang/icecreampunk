// import styles from "imageUpload.module.css";

import React, { useState } from "react";

const ImageUpload = () => {
  const [imageSrc, setImageSrc] = useState("");

  const onChange = (event) => {
    console.log(event.target.files);

    const file = event.target.files[0];
    if (!file) {
      setImageSrc("");
    } else {
      const img = URL.createObjectURL(file);
      setImageSrc(img);
    }
  };
  return (
    <>
      <input type="file" accept="image/*" name="image" onChange={onChange} />
      <img src={imageSrc} alt="" />
    </>
  );
};

export default ImageUpload;
