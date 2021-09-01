import React from "react";
import Link from "./Link";

export default {
  title: "Common Components/Atoms/Link",
  component: Link,
  argTypes: {
    label: {
      name: "Label",
      type: "string",
    },
    titleLabel: {
      name: "Title Label",
      type: "string",
      defaultValue: "Hello",
      description: "Used as title tag for accessibility point of view",
    },
    path: {
      name: "Anchor Link",
      type: "string",
    },
    isExternal: {
      name: "Is Link External?",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
  },
};

const Template = (args) => <Link {...args} />;

export const externalLink = Template.bind({});
externalLink.args = {
  label: "Read More",
  titleLabel: "Read More",
  path: "http://google.com",
  isExternal: true,
};
