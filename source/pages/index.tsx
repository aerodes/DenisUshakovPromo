import { useState } from "react";
import * as styles from "./index.module.scss";

const Template = () => {
  const [color, setColor] = useState("rgb(0, 0, 0,)");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  setInterval(() => {
    setColor(
      `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
    );
  }, 1000);
  return (
    <div className={styles["div"]} style={{ color: color, background: "#000" }}>
      Кристина лучшая девушка!!!
    </div>
  );
};

export default Template;
