import React from "react";
import EmailSubscription from "./EmailSubscription";

export default {
  title: "Common Components/Molecules/EmailSubscription",
  component: EmailSubscription,
  argTypes: {
    subscriptionText: {
      name: "Subscription Description",
      type: { name: "string", required: false },
      control: "text",
    },

    buttonLabel: {
      name: "Button Label",
      type: { name: "string", required: false },
      control: "text",
    },
    placeholderText: {
      name: "Placeholder",
      type: { name: "string", required: false },
      control: "text",
    },
  },
};
const Template = (args) => <EmailSubscription {...args} />;

export const subscribe = Template.bind({});
subscribe.args = {
  subscriptionText:
    "Don't miss out! <i>Enter your email</i> for Nexxus coupons, beauty news, expert how-tos and more!",
  buttonLabel: "subscribe",
  placeholderText: "enter your email",
};
