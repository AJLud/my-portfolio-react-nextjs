import React from "react";

import {
  SecondaryBtn,
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Alex Ludlow <br />
        Junior Software Developer
      </SectionTitle>
      <br />
      <br /> <br /> <br /> <br />
      <SectionText>Hi, I wanna learn how to make cool stuff.</SectionText>
      <br /> <br /> <br /> <br /> <br /> <br />
    </LeftSection>
  </Section>
);

export default Hero;
