import React from "react";
import HeroComposite from "./HeroComposite";

export default {
  title: "Common Components/Frasers/HeroComposite",
  component: HeroComposite,
  argTypes: {
    image: {
      name: "Image",
      type: { name: "object", required: false },
      defaultValue: {
        src: "https://www.fraserspropertyindustrial.com/-/media/Estates/AU/Northern-Region/Vantage-Yatala/Image-Snippets/news-letter-mac.png",
        alt: "test",
        sources: [
          {
            srcset: `https://www.fraserspropertyindustrial.com/-/media/Estates/AU/Northern-Region/Vantage-Yatala/Image-Snippets/news-letter-mac.png`,
            media: `(max-width:600px)`,
          },
          {
            srcset: `https://www.fraserspropertyindustrial.com/-/media/Estates/AU/Northern-Region/Vantage-Yatala/Image-Snippets/news-letter-mac.png`,
            media: `(min-width:768px)`,
          },
        ],
      },
    },
    title: {
      name: "Title",
      type: { name: "string", required: false },
      defaultValue: "HAIR TREATMENTS",
    },
    description: {
      name: "Description",
      type: { name: "string", required: false },
      defaultValue:
        "Treat your hair to some self-care with a hair mask or scalp scrub. Exfoliate, Deep condition, replenish nutrients and enjoy a spa day",
    },
    cta: {
      name: "Call To Action",
      type: { name: "object", required: false },
      defaultValue: {
        label: "Read more",
        path: "https://www.w3schools.com/",
      },
    },
    orientation: {
      name: "Orientation",
      options: ["normal", "reverse"],
      defaultValue: "reverse",
      control: { type: "select" },
    },
  },
};

const Template = (args) => <HeroComposite {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "HAIR TREATMENTS",
  description:
    "Treat your hair to some self-care with a hair mask or scalp scrub. Exfoliate, Deep condition, replenish nutrients and enjoy a spa day",
  orientation: "normal",
  image: {
    src: "https://www.fraserspropertyindustrial.com/-/media/Estates/AU/Northern-Region/Vantage-Yatala/Image-Snippets/news-letter-mac.png",
    alt: "test",
    sources: [
      {
        srcset: `https://www.fraserspropertyindustrial.com/-/media/Estates/AU/Northern-Region/Vantage-Yatala/Image-Snippets/news-letter-mac.png`,
        media: `(max-width:600px)`,
      },
      {
        srcset: `https://www.fraserspropertyindustrial.com/-/media/Estates/AU/Northern-Region/Vantage-Yatala/Image-Snippets/news-letter-mac.png`,
        media: `(min-width:768px)`,
      },
    ],
  },
  cta: {
    label: "Read More",
    path: "https://www.w3schools.com/",
  },
};
