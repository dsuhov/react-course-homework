import React, { useState } from "react";

export const Incrementer: React.FC<{ color?: string }> = ({ color }) => {
  const [value, setValue] = useState<number>(0);

  return (
    <>
      <button
        style={{ color: color || "grey" }}
        onClick={() => setValue(value + 1)}
      >
        Push
      </button>
      <h1>{value}</h1>
    </>
  );
};
