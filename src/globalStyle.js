import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 
  
 } 
 body {
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #1C1D24;
  


  }
  ::-webkit-scrollbar-thumb {
    background: #47b5ff
    
    ;

  }
 
 }
`;

export const Container = styled.div`
  width: 100%;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 24px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#47b5ff" : "#3A5BA0")};
  color: #fff;
  padding: ${({ big }) => (big ? "12px 6px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  width: 40%;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#3A5BA0" : "#47b5ff")};
  }

  @media screen and (max-width: 890px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Line = styled.hr`
  border: 0;
  height: 2px;
  background: ${({ color }) => (color ? "#fff" : "#1b2430;")};
  margin-bottom: 2rem;
  opacity: 0.5;
  width: 70%;

  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  padding: 6rem 0;

  @media screen and (max-width: 890px) {
    padding: 3rem 0;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 4rem;
  max-width: 520px;
  color: rgb(135 142 153);

  @media screen and (max-width: 890px) {
    margin-bottom: 4rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.25rem;
  @media screen and (max-width: 890px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 500;
  }
`;

export default GlobalStyle;
