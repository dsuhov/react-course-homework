import styled from "@emotion/styled";
import type { CellProps } from "./types";

type CellSVGProps = Pick<CellProps, "isAlive">;

export const GolCellSVG = styled.rect<CellSVGProps>`
  fill: ${({ isAlive }) => (isAlive ? "#151515" : "#ffffff")};
`;
