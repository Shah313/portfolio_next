import React from "react";

import {
  Wrapper,
  ContainerSize,
  ContainerContent,
  SectionIntro1,
  SectionIntro2,
  Intro,
  SectionIntro3,
  SectionTitle,
  SectionText,
  SectionList,
  Icon,
  ScrollButton,
} from "./ResumeStyles";
import { IoMdClose } from "react-icons/io";

const ResumeModal = ({ setIsShown }) => {
  const handleClose = () => {
    setIsShown(false);
  };
  return (
    <>
      <Wrapper>
        <ContainerSize>
          <ContainerContent>
            <Intro>
              <Icon>
                <IoMdClose onClick={handleClose} />{" "}
              </Icon>

              <SectionIntro1>Syed Muhammad Shoaib</SectionIntro1>

              <SectionIntro2>React Developer</SectionIntro2>
            </Intro>

            <SectionTitle>Summary:</SectionTitle>

            <SectionText>
              Experienced React Developer with expertise in building visually
              appealing designs, implementing complex functionality, and
              effectively integrating API data. Skilled in data visualization to
              deliver intuitive, user-friendly interfaces.
            </SectionText>

            <SectionTitle>Key Skills:</SectionTitle>

            <SectionList>
              <li> Application Designer</li>
              <li> UI Designer </li>
              <li> Webpage designing </li>
            </SectionList>

            <SectionTitle>Technical Skills:</SectionTitle>

            <SectionList>
              <li> HTML</li> <li> CSS</li> <li> React</li>{" "}
              <li> Wordpress</li>
              <li> Firebase</li> <li> Next.JS</li>{" "}
            </SectionList>

            <SectionTitle>Professional Experience:</SectionTitle>

            <SectionList>
              <SectionIntro3>Restaurant Website:</SectionIntro3>

              <li>
                {" "}
                 Collaborate with cross-functional teams to design and develop
                a user-friendly food website that showcases the brand and the
                latest products.{" "}
              </li>
              <li>
                {" "}
                 Implement responsive design techniques to ensure optimal user
                experience across all devices and platforms.{" "}
              </li>
              <li>
                {" "}
                 Utilize HTML, CSS, and JavaScript to create visually appealing
                and interactive pages and features.{" "}
              </li>
            </SectionList>

            <SectionList>
              <SectionIntro3>Travel Website:</SectionIntro3>

              <li>
                {" "}
                 Developed and maintained a visually appealing and
                user-friendly travel website using React.{" "}
              </li>
              <li>
                {" "}
                 Collaborated with a team of designers and developers to create
                responsive web pages and features.
              </li>
              <li>
                {" "}
                 Integrated API data to provide real-time information on
                flights, accommodations, and other travel-related services.{" "}
              </li>
              <li>
                {" "}
                 Created custom data visualization components to showcase
                travel itineraries, pricing, and availability.
              </li>
            </SectionList>

            <SectionList>
              <SectionIntro3>Blog Website:</SectionIntro3>

              <li>
                {" "}
                 Designed and developed a responsive and engaging blog website
                using React and related technologies.{" "}
              </li>
              <li>
                {" "}
                 Implemented custom components and functionality such as search
                bar, categories, tags, and commenting system to optimize user
                experience.
              </li>
              <li>
                {" "}
                 Integrated API data to provide real-time information on
                related articles, author information, and other relevant
                details.{" "}
              </li>
            </SectionList>

            <SectionTitle>Education:</SectionTitle>
            <SectionIntro3>
              Bachelor of science in computer-science -2019
            </SectionIntro3>

            <SectionList>
              Sir Syed University of Engineering @ Technology
            </SectionList>
          </ContainerContent>

          <ScrollButton>⬇️</ScrollButton>
        </ContainerSize>
      </Wrapper>
    </>
  );
};

export default ResumeModal;
