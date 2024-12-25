import React, { useState, useEffect, ReactElement } from "react";
import OrientationFromGPT from "./components/OrientationFromGPT";
import OrientationMy from "./components/OrientationMy";
import Test from "./components/Test";

const Template = () => {
  useEffect(() => {
    console.log(Telegram.WebApp.contentSafeAreaInset);
  }, []);

  const getSafeArea = () => {
    if (Telegram.WebApp.isFullscreen && Telegram.WebApp.contentSafeAreaInset) {
      const safeArea = Telegram.WebApp.contentSafeAreaInset;
      document.body.style.margin = `${safeArea.top}px ${safeArea.right}px ${safeArea.bottom}px ${safeArea.left}px`;
    } else {
      document.body.style.margin = "0";
    }
  };

  const testFullScreen = () => {
    const tg = Telegram.WebApp;
    if (tg.isVersionAtLeast("8.0")) {
      console.log("версия выше или равна API 8.0");
      tg.lockOrientation();
      if (
        tg.platform === "android" ||
        tg.platform === "android_x" ||
        tg.platform === "ios"
      ) {
        tg.requestFullscreen();
        document.body.style.margin = `${tg.contentSafeAreaInset.top}px ${tg.contentSafeAreaInset.right}px ${tg.contentSafeAreaInset.bottom}px ${tg.contentSafeAreaInset.left}px`;
      }
    } else {
      tg.expand();
    }
  };

  document.addEventListener("DOMContentLoaded", () => testFullScreen());

  Telegram.WebApp.onEvent("contentSafeAreaChanged", () => getSafeArea());

  useEffect(() => {
    if (Telegram.WebApp.isVersionAtLeast("7.0")) {
      Telegram.WebApp.SettingsButton.show();
      Telegram.WebApp.MainButton.show();
    }
  }, []);

  return (
    <div
      style={{
        padding: "16px 16px 16px 16px",
        fontFamily: "Arial",
        height: "100vh",
        width: "100vw",
      }}
    >
      <OrientationFromGPT />
      <div>{Telegram.WebApp.version}</div>
      <div>{Telegram.WebApp.isVersionAtLeast("8.0")}</div>
      <div>top: {Telegram.WebApp.contentSafeAreaInset.top}</div>
    </div>
  );
};

export default Template;
