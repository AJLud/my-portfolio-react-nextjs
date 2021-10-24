import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { AiFillTool } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <br />
    <br />
    <SectionText>
      Over my time so far I have learnt to use different technologies to create
      different things!
    </SectionText>
    <br />
    <br />
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js, HTML, CSS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js, Express,
            <br /> PGSQL, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillTool size="3rem" />
        <ListContainer>
          <ListTitle>Other-Tools</ListTitle>
          <ListParagraph>
            Experience with <br /> Figma, Jira
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
