import React, { useState, useEffect } from "react";

// Telegram Web App подключение
const useTelegramWebApp = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.Telegram.WebApp) {
      // @ts-ignore
      const webApp = window.Telegram.WebApp;
      webApp.ready(); // Уведомляем Telegram, что Mini App готово
    }
  }, []);
};

const Template = () => {
  useTelegramWebApp();

  const [orientation, setOrientation] = useState({
    alpha: null, // Угол вокруг оси Z
    beta: null,  // Угол вокруг оси X
    gamma: null, // Угол вокруг оси Y
  });

  useEffect(() => {
    const handleOrientation = (event) => {
      setOrientation({
        alpha: event.alpha?.toFixed(2), // Ограничиваем количество знаков
        beta: event.beta?.toFixed(2),
        gamma: event.gamma?.toFixed(2),
      });
    };

    // Проверяем поддержку API
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    } else {
      console.warn("DeviceOrientation API не поддерживается этим устройством");
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return (
    <div style={{ padding: "16px", fontFamily: "Arial" }}>
      <h1>Device Orientation</h1>
      <p>Alpha (Z-axis): {orientation.alpha}</p>
      <p>Beta (X-axis): {orientation.beta}</p>
      <p>Gamma (Y-axis): {orientation.gamma}</p>
    </div>
  );
};

export default Template;
