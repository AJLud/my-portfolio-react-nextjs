import Link from "next/link";
import React from "react";
import {
  AiFillFile,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { colours } from "../../styles/GlobalComponents";

import { RiEditCircleLine } from "react-icons/ri";
import { GiAnvil } from "react-icons/gi";
import { IoMdHand } from "react-icons/io";

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="https://ajlud.github.io/my-portfolio-react-nextjs/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: colours.primary,
          }}
        >
          <RiEditCircleLine size="3rem" /> Portfolio
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/AJLud">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alex-ludlow-b97359211/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
