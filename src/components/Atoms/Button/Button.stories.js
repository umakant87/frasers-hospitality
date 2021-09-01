/* eslint-disable */
import React from "react";

import { Button } from "./Button";

export default {
  title: "Common Components/Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      name: "Background Color",
      type: { name: "string", required: false },
      control: "color",
    },
    className: {
      name: "Class Name",
      type: { name: "string", required: false },
      defaultValue: "secondary",
    },
    size: {
      name: "Size",
      options: ["large", "small", "medium"],
      defaultValue: "medium",
      control: { type: "select" }
    },
    label: {
      name: "Label",
      type: { name: "string", required: false },
      defaultValue: "Button",
    },
    type: {
      name: "Type",
      options: ["button", "submit"],
      control: { type: "select" },
      defaultValue: "button"
    },
    callToAction: {
      name: "Call To Action",
      type: { name: "string", required: false },
      defaultValue: "http://www.google.com"
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "button",
  label: "Button",
  className: "primary",
  callToAction: "http://www.google.com"
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  label: "Button",
  callToAction: "http://www.twitter.com"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  type: "button",
  label: "Button",
  callToAction: "http://www.linkedin.com"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  type: "button",
  label: "Button",
  callToAction: "http://www.facebook.com"
};
