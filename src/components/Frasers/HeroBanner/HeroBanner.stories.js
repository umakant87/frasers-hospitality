/* eslint-disable */
import React from "react";
import HeroBanner from "./HeroBanner";

export default {
  title: "Common Components/Frasers/HeroBanner",
  component: HeroBanner,
  argTypes: {
    title: {
      name: "Title",
      type: { name: "string", required: false },
      defaultValue: "primary",
    },
    description: {
      name: "Description",
      type: { name: "string", required: false },
      defaultValue: "primary",
    },
    orientation: {
      name: "Orientation",
      options: ["start", "center", "end"],
      type: { name: "select" },
      defaultValue: "start",
    },
    image: {
      name: "Image",
      type: { name: "object", required: false },
      defaultValue: {
        src: "./HeroBanner/content-header-general.png",
        alt: "fraser",
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
      },
    },
  },
};

const Template = (args) => <HeroBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Future focused",
  description: "Industrial and commercial has evolved and we’re here to keep it on track towards a smarter and more sustainable future for all.",
  orientation: "start",
  image: {
    src: "./HeroBanner/content-header-general.png",
    alt: "Fraser",
  },
  link: "http://www.google.com"
};
