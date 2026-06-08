import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
  background-color: rgba(8, 8, 22, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;
const ColorText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 26px;
  font-weight: 700;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 19px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  /* UIverse style hover line-draw under links */
  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  &:hover::after {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1.5px solid ${({ theme }) => theme.primary}aa;
  color: ${({ theme }) => theme.text_primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 22px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    color: #ffffff;
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 8px 24px ${({ theme }) => theme.primary}4c, 0 0 15px ${({ theme }) => theme.primary}26;
  }

  &:active {
    transform: translateY(-1px) scale(0.97);
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul<{ isOpen?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  list-style: none;
  padding: 24px 40px 32px 40px;
  background: rgba(13, 13, 27, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  position: absolute;
  top: 80px;
  right: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-110%)"};
  border-radius: 0 0 24px 24px;
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.4);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <ColorText>&lt;</ColorText>A. Sravan Kumar
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit", fontSize: "28px" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>
 
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Contact">
              Contact
            </NavLink>
            <GithubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
                marginTop: "10px",
                width: "100%",
                textAlign: "center",
              }}
            >
              Github Profile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_Blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

