import React, { useState, useEffect, ReactElement } from "react";
import OrientationFromGPT from "./components/OrientationFromGPT";
import OrientationMy from "./components/OrientationMy";
import Test from "./components/Test";

const Template = () => {

useEffect(() => {
  console.log(Telegram.WebApp.contentSafeAreaInset);
}, [])

const getSafeArea = () => {
  if (Telegram.WebApp.isFullscreen && Telegram.WebApp.contentSafeAreaInset) {
    const safeArea = Telegram.WebApp.contentSafeAreaInset;
    document.body.style.margin = `${safeArea.top}px ${safeArea.right}px ${safeArea.bottom}px ${safeArea.left}px`;
  } else {
    document.body.style.margin = "0";
  }
}

// const testFullScreen = () => {
//   if ()
// }

// useEffect(() => {
//   getSafeArea();
// }, [])

// "android" | "android_x" | "ios" | "macos" | "tdesktop" | "weba" | "webk" | "unigram" | "unknown"

Telegram.WebApp.onEvent("contentSafeAreaChanged", () => getSafeArea())

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
    </div>
  );
};

export default Template;
