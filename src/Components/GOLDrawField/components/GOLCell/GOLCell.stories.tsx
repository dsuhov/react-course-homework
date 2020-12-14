import { Meta, Story } from "@storybook/react";
import React from "react";
import { GOLCell } from "./GOLCell";
import type { CellProps } from "./types";

export default {
  component: GOLCell,
  title: "GOL Cell",
} as Meta;

const Template: Story<CellProps> = (args) => (
  <div
    style={{
      width: "16px",
      height: "16px",
      padding: "3px",
      boxSizing: "border-box",
      background: "#dadada",
    }}
  >
    <svg
      viewBox="0 0 10 10"
      width="10"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
      }}
    >
      <GOLCell {...args} />
    </svg>
  </div>
);

export const DeadCell = Template.bind({});

DeadCell.args = {
  isAlive: false,
  id: 1,
  // onCellClick: (id) => {},
};

export const AliveCell = Template.bind({});

AliveCell.args = {
  isAlive: true,
  id: 1,
  // onCellClick: (id) => {},
};
