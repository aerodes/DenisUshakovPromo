import React, { useState, useEffect } from "react";
import OrientationFromGPT from "./components/OrientationFromGPT";
import OrientationMy from "./components/OrientationMy";
import Test from "./components/Test";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    // @ts-ignore
    return this.props.children;
  }
}

const Template = () => {
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
      <ErrorBoundary>
        <OrientationFromGPT />
      </ErrorBoundary>
      <ErrorBoundary>
        <OrientationMy />
      </ErrorBoundary>
      <ErrorBoundary>
        <Test />
      </ErrorBoundary>
    </div>
  );
};

export default Template;
