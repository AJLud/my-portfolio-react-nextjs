import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hello! I am Alex. I am Northcoders Bootcamp Graduate. Graduating the
        Bootcamp has made me discover how much fun coding can be (and how
        frustrating sometimes...) but also incredibly rewarding.
        <br />
        <br />
        In my previous life I worked as a camera assistant in the TV and Film
        industry, working on some incredible shows with some really excellent
        teams!
        <br />
        <br />
        Making this career change has ignited my passion for learning again, and
        I have only yet dipped my toe in the pond.
        <br />
        In my spare time I enjoy a bit of gaming and I love going out onto the
        water with my Paddleboard!
      </SectionText>
    </Section>
  );
};

export default AboutMe;
