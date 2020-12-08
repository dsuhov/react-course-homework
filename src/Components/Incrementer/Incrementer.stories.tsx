import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { Incrementer } from "./Incrementer";

export default {
  title: "TryIncrementor",
  component: Incrementer,
} as Meta;

const Template: Story<{ color: string }> = (args) => <Incrementer {...args} />;

export const TryIncrementor = Template.bind({});

TryIncrementor.args = {
  color: "red",
};
