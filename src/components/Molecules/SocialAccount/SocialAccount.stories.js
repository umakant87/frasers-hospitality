/* eslint-disable */
import React from "react";
import SocialAccount from "./SocialAccount";

export default {
  title: "Common Components/Molecules/SocialAccount",
  component: SocialAccount,
  argTypes: {
    socialmenus: {
      name: "Social Menu",
      type: { name: "array", required: false },
      defaultValue: [
        {
          label: "Facebook",
          service: "facebook",
          url: "https://facebook.com/nexxus",
        },
        {
          label: "Twitter",
          service: "twitter",
          url: "https://twitter.com",
        },
        {
          label: "Instagram",
          service: "instagram",
          url: "https://www.instagram.com/",
        },
        {
          label: "Youtube",
          service: "youtube",
          url: "https://www.youtube.com/",
        },
        {
          label: "LinkedIn",
          service: "linkedin",
          url: "https://www.linkedin.com/",
        },
      ],
    },
  },
};

const Template = (args) => <SocialAccount {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  socialmenus: [
    {
      label: "Facebook",
      service: "facebook",
      url: "https://facebook.com/nexxus",
    },
    {
      label: "Twitter",
      service: "twitter",
      url: "https://twitter.com",
    },
    {
      label: "Instagram",
      service: "instagram",
      url: "https://www.instagram.com/",
    },
    {
      label: "Youtube",
      service: "youtube",
      url: "https://www.youtube.com/",
    },
    {
      label: "LinkedIn",
      service: "linkedin",
      url: "https://www.linkedin.com/",
    },
  ],
};
