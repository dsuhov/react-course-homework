export type CellProps = {
  isAlive: boolean;
  id: number;
  onCellClick: (id: number) => void;
};
