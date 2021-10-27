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
      <br />
      <br />
      <br />
      <SectionText>
        Hello! I am Alex. I am a Northcoders coding bootcamp graduate now
        working as a junior developer at a fintech company!
        <br />
        <br />
        Before attending Northcoders and starting my developer journey, I worked
        as a freelance technician in the Film and TV industry.
        <br />
        <br />
        Making this career change has ignited my passion for learning again, and
        I have only yet dipped my toe in the pond!
        <br />
        <br />
        In my spare time I like to go climbing, paddleboarding and finding great
        places to eat!
      </SectionText>
    </Section>
  );
};

export default AboutMe;
