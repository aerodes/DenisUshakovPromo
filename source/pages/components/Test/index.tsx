import React, { ReactElement } from "react";

const Test = (): ReactElement => {
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
