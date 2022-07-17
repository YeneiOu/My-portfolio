import styled from "styled-components";
import { FaArtstation } from "react-icons/fa";

export const Footers = styled.div`
  background: #1c1d24;
  padding: 4rem 0;
`;

export const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 890px) {
    flex-direction: column;
    margin-top: 1.2rem;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
`;

export const SocialLink = styled.a`
  font-size: 18px;
  color: #47b5ff;
`;

export const LogoBox = styled.div`
  margin: 1rem 0;
  color: #fff;
  display: flex;
  align-items: flex-end;
`;

export const LogoIcon = styled(FaArtstation)`
  font-size: 24px;
  color: #fff;
  margin-right: 0.5rem;
`;

export const CopyRightText = styled.p`
font-size: 16px;
color: #fff;

`;
