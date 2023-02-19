import React from 'react';
import { DiCss3Full, DiReact, DiZend } from 'react-icons/di';
 
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I specialize in front-end development using HTML, CSS, JavaScript, and React, bringing user-friendly and visually appealing designs to life.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3Full size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI</ListTitle>
          <ListParagraph>
            Experience with <br />
             Style-Components/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Server-Side Rendering</ListTitle>
          <ListParagraph>
             <br />
            Experience with Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
