import React from "react";
import { render } from "react-dom";
import { Incrementer } from "./Components/Incrementer";

render(
  <Incrementer onClick={() => console.log("foo")} />,
  document.getElementById("root")
);
