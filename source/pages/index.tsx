import { useEffect, useState } from "react";
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

  const setBGColor = (webApp, color) => {
    webApp.setBottomBarColor(color);
  }

  useEffect(() => {
    setBGColor(initTG(), "#ffffff");
  }, [])

  useEffect(() => {
    const div = document.getElementById("orient");
    initTG().DeviceOrientation.start(20, false, (orientation) => {
      if (div) {
        div.innerText = `alpha: ${orientation.alpha}, beta: ${orientation.beta}, gamma: ${orientation.gamma}`;
      } else console.warn("div для вывода ориентации не найден!!!");

    })
  })

  return (
    // <div className={styles["div"]} style={{ color: color, background: "#000" }}>
    //   Кристина лучшая девушка!!!
    // </div>
    <div style={{ background: "#D4EFF7", height: "100vh", width: "100vw", padding: "60px 16px 16px 16px" }}>
      <div style={{ marginTop: "40px", width: "100%" }}>{`${initTG()?.initData}`}</div>
      <div style={{ marginTop: "40px" }}>{`${initTG()?.initDataUnsafe?.user?.username}`}</div>
      <div style={{ marginTop: "40px" }}>Загрузилось!!!</div>
      <div style={{ marginTop: "40px" }} id="orient"></div>
      {/* <button onClick={() => initTG().downloadFile("https://i.pinimg.com/736x/82/2a/1d/822a1d20af7ef527f3dbb2636b1568e7.jpg")}>загрузить изображение</button> */}
    </div>
  );
};

export default Template;
