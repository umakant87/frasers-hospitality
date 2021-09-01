import React from "react";
import FormInput from "./FormInput";

export default {
  title: "Common Components/Atoms/FormInput",
  component: FormInput,
  parameters: { actions: { argTypesRegex: "^on.*" } },
  argTypes: {
    onClick: { action: "clicked" },
    id: {
      name: "ID",
      type: { name: "string", required: false },
      control: "text",
    },
    type: {
      name: "Type",
      options: [
        "text",
        "email",
        "number",
        "password",
        "search",
        "hidden",
        "radio",
        "checkbox",
      ],
      control: "select",
    },
    name: {
      name: "Name",
      type: { name: "string", required: false },
      control: "text",
    },
    placeholder: {
      name: "Placeholder",
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
    showLabel: {
      name: "Show Label",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    readOnly: {
      name: "Read only",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    disabled: {
      name: "Disabled",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
  },
};
const Template = (args) => <FormInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  id: "firstname",
  type: "text",
  name: "firstname",
  placeholder: "First Name",
  label: "First Name",
  modifiers: "",
  showLabel: true,
  readOnly: true,
  disabled: false,
};
