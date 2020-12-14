import React from "react";
import { GolCellSVG } from "./style";
import type { CellProps } from "./types";

export const GOLCell: React.FC<CellProps> = ({ isAlive, onCellClick, id }) => (
  <GolCellSVG
    onClick={() => onCellClick(id)}
    isAlive={isAlive}
    x="0"
    y="0"
    width="10"
    height="10"
  />
);
