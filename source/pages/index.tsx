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
    return `${safeArea.top}px ${safeArea.right}px ${safeArea.bottom}px ${safeArea.left}px`;
  } else {
    return "0"
  }
}

  return (
    <div style={{
      padding: getSafeArea(),
    }}>
      <div
      style={{
        padding: "0px 16px 16px 16px",
        fontFamily: "Arial",
        background: "#D4EFF7",
        height: "100vh",
        width: "100vw",
      }}
    >
      <OrientationFromGPT />
    </div>
    </div>
  );
};

export default Template;
