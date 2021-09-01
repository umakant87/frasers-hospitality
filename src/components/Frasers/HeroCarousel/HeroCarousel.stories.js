/* eslint-disable */
import React from "react";
import HeroCarousel from "./HeroCarousel";

export default {
  title: "Common Components/Frasers/Carousel",
  component: HeroCarousel,
  argTypes: {
    primary: {
      name: "Primary",
      type: { name: "boolean", required: false },
      defaultValue: false,
    },
    className: {
      name: "Class Name",
      type: { name: "string", required: false },
      defaultValue: "primary",
    },
    slides: {
      name: "Slides",
      type: { name: "array", required: false },
      defaultValue: [
        {
          src: `./HeroCarousel/Frasers Rhodes Park 012RS1920x1080.png`,
          text: `Nature Wide`,
        },
        {
          src: `./HeroCarousel/hazeldonk.jpg`,
          text: `Snow Wide`,
        },
        {
          src: `./HeroCarousel/ive.jpg`,
          text: `Mountains Wide`,
        },
        {
          src: `./HeroCarousel/The Yards Kemps Creek 2 Carousel 1920x1080.jpg`,
          text: "Text 4"
        }
      ],
    },
    showCaption: {
      name: "Show Caption",
      type: { name: "boolean", required: false },
      defaultValue: true,
    },
    captionAlignment: {
      name: "Caption Alignment",
      options: ["start", "center", "end"],
      type: { name: "select" },
      defaultValue: "center"
    },
  },
};

const Template = (args) => <HeroCarousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  className: "primary",
  showCaption: true,
  captionAlignment: "center"
};
