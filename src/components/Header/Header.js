import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  FaTimes,
  FaBars,
  
} from "react-icons/fa";

import { Item } from "../Data/List";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLink,
  NavItem,
  
} from "./Header.elements";

const Header = () => {
  const [click, setClick] = useState(false);
  const [bg, setBg] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <Nav bg={bg}>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon />
          Portfolio
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          {Item.map((item, index) => {
            return (
              <NavItem>
                <NavLink to={item.href} onClick={closeMobileMenu} key={index}>
                  {item.name}
                </NavLink>
              </NavItem>
            );
          })}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
