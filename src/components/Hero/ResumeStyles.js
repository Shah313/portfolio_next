import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerSize = styled.div`
  position: relative;

  max-width: 1240px;

  width: 100%;

  margin: 0 auto;

  height: 480px;

  overflow: auto;
  border: 1px solid #ccc;
  padding: 10px;
`;

export const ScrollButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

export const ContainerContent = styled.div`
  /*   background-color: #ecedf6;
 */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 995px;
  background-color: #f2f2f2;
  padding: 17px;
  margin-top: 10px;
  box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0.5),
    0 0 20px 20px rgba(255, 255, 255, 0.2);

  @media ${(props) => props.theme.breakpoints.lg} {
    height: auto;
    padding: 10px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 0;
    height: auto;
    padding: 10px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: auto;
    padding: 10px;
  }
`;

export const Intro = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 16px;
  background: linear-gradient(to bottom, #ffffff, #e6e6e6);

  box-sizing: border-box;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 50px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 50px;
  }
`;

export const SectionIntro1 = styled.h1`
  bottom: 30px;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #0f1624;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    text-align: center;
  }
`;

export const SectionIntro2 = styled.h3`
  margin: 1rem 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #0f1624;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 8px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 11px;
    position: relative;
    top: -7px;
  }
`;

export const SectionIntro3 = styled.h3`
  margin-bottom: 5px;
  left: 0;
  width: 100%;
  font-size: 15px;
  color: #888;
`;

export const SectionTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 7px;
  color: black;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 25px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 35px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 48px;
  }
`;

export const SectionText = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
  color: black;
  line-height: 2rem;
`;

export const SectionList = styled.ul`
  font-size: 16px;
  margin-bottom: 25px;
  color: black;
  line-height: 2rem;
  
  li {
    margin: 0 0 5px 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
    display: flex;

    &::before {
      content: "•";
      margin-right: 5px;
    }
  }

`;

export const Icon = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  display: inline-block;
  height: auto;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #cccdde;
  color: #646681;
  &:hover {
    color: #555;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    top: 10px;
    right: 5px;
    font-size: 1rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    top: 10px;
    right: 5px;
    font-size: 1.5rem;
  }
`;
