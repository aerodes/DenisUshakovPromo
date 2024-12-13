import React, { useState, useEffect } from "react";
import OrientationFromGPT from "./components/OrientationFromGPT";
import OrientationMy from "./components/OrientationMy";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    logErrorToMyService(error, errorInfo);
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

function logErrorToMyService(error: any, errorInfo: any) {
  throw new Error(error, errorInfo);
}

const Template = () => {
  const [data, setData] = useState<string[]>();
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
        {data.map((element) => (
          <p>{element}</p>
        ))}
      </ErrorBoundary>
    </div>
  );
};

export default Template;
