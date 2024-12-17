import React, { useState, useEffect, ReactElement } from "react";
import OrientationFromGPT from "./components/OrientationFromGPT";
import OrientationMy from "./components/OrientationMy";
import Test from "./components/Test";

const Template = () => {

useEffect(() => {
  console.log(Telegram.WebApp.contentSafeAreaInset);
}, [])

  return (
    <div
      style={{
        padding: "60px 16px 16px 16px",
        fontFamily: "Arial",
        background: "#D4EFF7",
        height: "100vh",
        width: "100vw",
      }}
    >
      <OrientationFromGPT />
    </div>
  );
};

export default Template;
