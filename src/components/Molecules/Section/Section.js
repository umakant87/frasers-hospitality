import React from "react";
import "./Section.scss";
import Text from "../../Atoms/Text/Text";

const Section = ({ children }) => (
  <section title="Storybook Section"> {children} </section>
);

export default Section;
