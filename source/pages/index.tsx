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

  const click = () => {
    try {
      tg.openTelegramLink(`tg://user?id=${1827844160}`);
    } catch {
      try {
        tg.openLink(`tg://user?id=${1827844160}`);
      } catch {
        window.open(`tg://user?id=${1827844160}`);
      }
    }
  }

  return (
    // <div className={styles["div"]} style={{ color: color, background: "#000" }}>
    //   Кристина лучшая девушка!!!
    // </div>
    <div style={{ background: "#D4EFF7", height: "100vh", width: "100vw" }}>
      <div>{tg.initData}</div>
      <button onClick={() => click()}>ссылка на Женю</button>
    </div>
  );
};

export default Template;
