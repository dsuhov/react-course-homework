import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Incrementer } from "./Incrementer";

export default {
  title: "TryIncrementor",
  component: Incrementer,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<{ color: string; onClick: any }> = (args) => (
  <Incrementer {...args} />
);

export const TryIncrementor = Template.bind({});

TryIncrementor.args = {
  color: "red",
};
