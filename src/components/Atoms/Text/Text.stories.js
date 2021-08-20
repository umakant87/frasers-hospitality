import React from "react";
import Text from "./Text";

export default {
  title: "Common Components/Atoms/Text",
  component: Text,
  argTypes: {
    className: {
      name: "Class Name",
      type: "string",
    },
    type: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "p"],
      },
    },
  },
};

const TextComponent = (args) => <Text {...args} />;

export const H1Text = TextComponent.bind({});
H1Text.storyName = "Heading 1";
H1Text.args = {
  className: "h1text",
  value: "Heading 1 Text",
  type: "h1",
};

export const H2Text = TextComponent.bind({});
H2Text.storyName = "Heading 2";
H2Text.args = {
  className: "h2text",
  value: "Heading 2 Text",
  type: "h2",
};

export const H3Text = TextComponent.bind({});
H3Text.storyName = "Heading 3";
H3Text.args = {
  className: "h3text",
  value: "Heading 3 Text",
  type: "h3",
};

export const H4Text = TextComponent.bind({});
H4Text.storyName = "Heading 4";
H4Text.args = {
  className: "h4text",
  value: "Heading 4 Text",
  type: "h4",
};

export const Ptext = TextComponent.bind({});
Ptext.storyName = "Paragraph Text";
Ptext.args = {
  className: "ptext",
  value: "Paragraph Text",
  type: "p",
};
