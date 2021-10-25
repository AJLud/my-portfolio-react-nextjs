import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle
        main
        center
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="2000"
      >
        Alex Ludlow <br />
        Junior Software Developer
      </SectionTitle>
      <br />
      <br /> <br /> <br /> <br />
      <SectionText
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-delay="3000"
      >
        Hi, I am learning how to create things!
      </SectionText>
      <br /> <br /> <br /> <br /> <br /> <br />
    </LeftSection>
  </Section>
);

export default Hero;
