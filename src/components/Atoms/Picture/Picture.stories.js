/* eslint-disable */
import React from "react";
import Picture from "./Picture";

export default {
  title: "Common Components/Atoms/Picture",
  component: Picture,
  argTypes: {
    src: {
      name: "Src",
      type: { name: "string", required: false },
      defaultValue: "https://www.w3schools.com/tags/img_orange_flowers.jpg",
    },
    alt: {
      name: "Alternate",
      type: { name: "string", required: false },
      defaultValue: "Alternate",
    },
    sources: {
      name: "Sources",
      type: { name: "array", required: false },
      defaultValue: [
        {
          srcset: `https://www.w3schools.com/tags/img_white_flower.jpg`,
          media: `(max-width:600px)`,
        },
        {
          srcset: `https://www.w3schools.com/tags/img_pink_flowers.jpg`,
          media: `(min-width:768px)`,
        },
      ],
    },
  },
};

const Template = (args) => <Picture {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: "https://www.w3schools.com/tags/img_orange_flowers.jpg",
  sources: [
    {
      srcset: `https://www.w3schools.com/tags/img_white_flower.jpg`,
      media: `(max-width:600px)`,
    },
    {
      srcset: `https://www.w3schools.com/tags/img_pink_flowers.jpg`,
      media: `(min-width:768px)`,
    },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  src: "https://www.w3schools.com/tags/img_orange_flowers.jpg",
  sources: [
    {
      srcset: `https://cdn.sanity.io/images/cstxp841/production/633473f9ab3e9f03f26d05fff8cbd119d24c3a03-2048x850.jpg?w=300&h=150&fit=crop&auto=format`,
      media: `(max-width:600px)`,
    },
    {
      srcset: `https://cdn.sanity.io/images/cstxp841/production/633473f9ab3e9f03f26d05fff8cbd119d24c3a03-2048x850.jpg?w=420&h=270&fit=crop&auto=format`,
      media: `(min-width:768px)`,
    },
  ],
};
