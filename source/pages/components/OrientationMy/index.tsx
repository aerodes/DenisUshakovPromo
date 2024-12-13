import React, { useState, useEffect } from "react";

// Telegram Web App подключение
const useTelegramWebApp = () => {
  useEffect(() => {
    if (Telegram.WebApp) {
      const webApp = Telegram.WebApp;
      webApp.ready(); // Уведомляем Telegram, что Mini App готово
    }
  }, []);
};

const OrientationMy = () => {
  useTelegramWebApp();

  const [orientation, setOrientation] = useState({
    alpha: null, // Угол вокруг оси Z
    beta: null,  // Угол вокруг оси X
    gamma: null, // Угол вокруг оси Y
  });

  useEffect(() => {
    const handleOrientation = (event) => {
      setOrientation({
        alpha: event.alpha?.toFixed(2),
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
    <>
      <h1>Device Orientation my</h1>
      <p>Alpha (Z-axis): {orientation.alpha}</p>
      <p>Beta (X-axis): {orientation.beta}</p>
      <p>Gamma (Y-axis): {orientation.gamma}</p>
    </>
  );
};

export default OrientationMy;
