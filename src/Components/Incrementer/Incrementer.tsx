import React, { useState } from "react";
import { MyButton } from "./style";

export const Incrementer: React.FC<{ color?: string, onClick: any }> = ({ color, onClick }) => {
  return (
    <>
      <MyButton
        onClick={onClick}
      >
        Push
      </MyButton>
      <h1>Click</h1>
    </>
  );
};
