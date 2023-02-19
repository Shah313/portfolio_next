import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import  { useState, useEffect } from 'react';
 
 import ResumeModal from './ResumeModal'; 
 



const texts = [
  'Portfolio',
  'Front-end developer',
  'UI designer',
  'Application Designer',
  'Feature Designer',
 
];



const Hero = () => {

  const [isShown, setIsShown] = useState(false);

  


  const handleClick = (event) => {
    setIsShown((current) => !current);
  }; 

  const [text, setText] = useState(texts[0]);
  let index = 0;

  
useEffect(() => {
  const changeText = () => {
    index = (index + 1) % texts.length;
    setText(texts[index]);
  };

  const intervalId = setInterval(changeText, 5000);
  return () => clearInterval(intervalId);
}, []);



  return (

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Welcome To <br />
  Syed Muhammad Shoaib <br />  
  {text}
        </SectionTitle>
        <SectionText>
        Experienced front-end developer with a passion for creating user-friendly solutions. Skilled in React.js. Bringing technical expertise and design sensibility to enhance the user experience.
        </SectionText>
          <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
       {isShown && (
              <ResumeModal    isShown={isShown} setIsShown={setIsShown}/> )} 
    </Section>
  </>
  )
}
export default Hero;


