import React, { useState, useEffect } from "react";
import OrientationFromGPT from "./components/OrientationFromGPT";
import OrientationMy from "./components/OrientationMy";

const Template = () => {

  return (
    <div style={{ padding: "60px 16px 16px 16px", fontFamily: "Arial", background: "#D4EFF7", height: "100vh", width: "100vw" }}>
      <OrientationFromGPT />
      <OrientationMy />
    </div>
  );
};

export default Template;
