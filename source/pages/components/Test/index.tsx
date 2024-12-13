import React, { ReactElement } from "react";

const Test = () => {
  return (
    <button
      onClick={() => {
        throw new Error("ОШИБКА!!!!");
      }}
    >
      error
    </button>
  );
};

export default Test;
