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

  const initTG = () => {
    // @ts-ignore
    const tg = window?.Telegram?.WebApp;
    return tg
  }

  const tg = initTG();

  return (
    // <div className={styles["div"]} style={{ color: color, background: "#000" }}>
    //   Кристина лучшая девушка!!!
    // </div>
    <div style={{ background: "#D4EFF7", height: "100vh", width: "100vw", padding: "60px 16px 16px 16px" }}>
      <div style={{ marginTop: "40px" }}>{tg?.initData}</div>
      <div style={{ marginTop: "40px" }}>{tg?.initDataUnsafe?.user}</div>
      <div style={{ marginTop: "40px" }}>Загрузилось!!!</div>
    </div>
  );
};

export default Template;
