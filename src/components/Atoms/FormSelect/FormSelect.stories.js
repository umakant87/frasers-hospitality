import React from "react";
import FormSelect from "./FormSelect";

export default {
  title: "Common Components/Atoms/FormSelect",
  component: FormSelect,
  parameters: { actions: { argTypesRegex: "^on.*" } },
  argTypes: {
    onClick: { action: "clicked" },
    id: {
      name: "ID",
      type: { name: "string", required: false },
      control: "text",
    },

    name: {
      name: "Name",
      type: { name: "string", required: false },
      control: "text",
    },
    label: {
      name: "Label",
      type: { name: "string", required: false },
      control: "text",
    },
    modifiers: {
      name: "Modifiers",
      type: { name: "string", required: false },
      control: "text",
    },
    options: {
      name: "Options",
      type: { name: "array", required: false },
      defaultValue: [
        {
          label: `Windows`,
          value: `windows`,
        },
        {
          label: `Mac`,
          value: `mac`,
        },
        {
          label: `Ubuntu`,
          value: `ubuntu`,
        },
      ],
    },
  },
};
const Template = (args) => <FormSelect {...args} />;

export const Select = Template.bind({});
Text.args = {
  id: "firstname",
  name: "computer",
  label: "Computer List",
  modifiers: "",
  options: [
    {
      label: `Windows`,
      value: `windows`,
    },
    {
      label: `Mac`,
      value: `mac`,
    },
    {
      label: `Ubuntu`,
      value: `ubuntu`,
    },
  ],
};
