import React from 'react';
import { AiFillGithub,  AiFillLinkedin } from 'react-icons/ai';
import { FiActivity } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
import Link from 'next/link';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, LogoBottom, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:0310-2527143">0310-2527143</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            shoaibshah1255@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <LogoBottom>
         <Link href="/">
       <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <FiActivity size="3rem" /> <span>S-M-S</span> 
        </a> 
      </Link>
      </LogoBottom>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Shah313">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/syed-muhammad-shoaib-415115131/m">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.upwork.com/freelancers/~01494bba2bf24331da">
            <SiUpwork size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
