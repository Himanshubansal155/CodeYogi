import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: "select",
      },
    },
  },
};

export const Main = (args: any) => <Button {...args} />;

Main.args = {
  children: "button",
  className: "hover:shadow-none px-5",
};

export const Outline = (args: any) => (
  <Button {...args} className="shadow-none px-5"/>
);

Outline.args = {
  outline: "outline",
  children: "button",
};
