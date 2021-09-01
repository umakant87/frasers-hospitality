/* Footer With Address stories used to carry footer nav,
Address, Social accounts, Copyright and desclimer messages */
import React from "react";
import FooterWithAddress from "./FooterWithAddress";

export default {
  title: "Common Components/Frasers/FooterWithAddress",
  component: FooterWithAddress,
  argTypes: {
    links: {
      name: "Links",
      type: { name: "array", required: false },
    },
    address: {
      name: "Address",
      type: { name: "string", required: false },
    },
    email: {
      name: "Email",
      type: { name: "text", required: false },
    },
    phone: {
      name: "Phone",
      control: { type: "number" },
    },
    copyRightContent: {
      name: "Copy Right Content",
      type: { name: "text", required: false },
    },
    disclaimerText: {
      name: "Disclaimer Text",
      type: { name: "text", required: false },
    },
  },
};

const FooterTemplate = (args) => <FooterWithAddress {...args} />;

export const PrimaryFooter = FooterTemplate.bind({});
PrimaryFooter.args = {
  links: [
    { title: "News", url: "https://www.fraserspropertyindustrial.com/News" },
    { title: "Careers", url: "https://careers.pageuppeople.com/779/fpi/en/listing" },
    { title: "Contact Us", url: "https://www.fraserspropertyindustrial.com/Contact-Us" },
    { title: "Search for a property", url: "https://www.fraserspropertyindustrial.com/SearchResults" },
  ],
  address: "121, Keas 69 Str. 15234, Chalandri Athens, Greece",
  email: "sales@example.com",
  phone: 9898989898,
  copyRightContent: "© Frasers property industrial",
  disclaimerText:
    "This website is directed only to U.S. consumers for products and services of Unilever United States.",
};
