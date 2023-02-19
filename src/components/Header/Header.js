import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {  SiUpwork } from 'react-icons/si';

import { FiActivity } from 'react-icons/fi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
   
      <Link href="/">
       <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <FiActivity size="3rem" /> <span>S-M-S</span> 
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
        <SocialIcons href="https://github.com/Shah313">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/syed-muhammad-shoaib-415115131/m">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.upwork.com/freelancers/~01494bba2bf24331da">
          <SiUpwork size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
