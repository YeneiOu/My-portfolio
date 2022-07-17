import styled from "styled-components";
import { Container } from "../../globalStyle";
import { Link } from "react-router-dom";
import { FaArtstation } from "react-icons/fa";

export const Nav = styled.header`
  background: ${({ bg }) => (bg ? "#1B2430" : "")};
  height: ${({ bg }) => (bg ? "5rem" : "6rem")};
  display: flex;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  transition: all 0.3s;
  z-index: 10;
  color: #fff;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaArtstation)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
 
  
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 70px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.3s ease;
    background: #1b2430;
  }
`;

export const NavItem = styled.li`
  height: 79px;
  border-bottom: 2px solid transparent;
  margin: 1rem 0;

  &:hover {
    border-bottom: 2px solid #47b5ff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #47b5ff;
      transition: all 0.3s ease;
    }
  }
`;

export const SocialsIcon = styled.ul`
  display: flex;
  margin-left: 0.5rem;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const SocialsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialsLogo = styled.a`
  text-decoration: none;
  margin-right: 0.8rem;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #47b5ff;
    transition: all 0.3s ease-in;
  }
`;
