import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import { LinkedIn, GitHub, Phone } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  align-items: center;
  padding: 80px 16px;
  @media (max-width: 960px) {
    padding: 60px 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding: 50px 30px;
  gap: 24px;
  border-radius: 24px;
  
  @media (max-width: 768px) {
    padding: 30px 16px;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  text-align: center;
  font-weight: 800;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(225deg, #ffffff 40%, #c49eff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 38px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Large glowing interactive email text
const EmailText = styled.a`
  font-size: clamp(24px, 4.5vw, 42px);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.3s ease;
  margin-bottom: 24px;
  text-align: center;
  background: linear-gradient(225deg, #ffffff 30%, #c49eff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }

  &:hover {
    filter: brightness(1.2);
    text-shadow: 0 0 20px ${({ theme }) => theme.primary}4c;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
`;

// UIverse Component integration comment: Premium glassmorphic contact button
const ContactButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 12px 24px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);

  &:hover {
    background: ${({ theme }) => theme.primary}1f;
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 25px ${({ theme }) => theme.primary}3c, 0 0 15px ${({ theme }) => theme.primary}1a;
  }

  &:active {
    transform: translateY(-2px) scale(0.97);
  }
`;

const Contact = () => {
  return (
    <Container id="Contact">
      <Wrapper className="liquid-glass">
        <Title>Let's connect</Title>
        <Desc>
          Open to internships, entry-level software roles, and collaboration opportunities. Feel free to reach out.
        </Desc>
        <EmailText href={`mailto:${Bio.email}`}>{Bio.email}</EmailText>
        
        <ButtonsContainer>
          <ContactButton href={Bio.linkedin} target="_blank">
            <LinkedIn />
            LINKEDIN
          </ContactButton>
          <ContactButton href={Bio.github} target="_blank">
            <GitHub />
            GITHUB
          </ContactButton>
          {(Bio as any).phone && (
            <ContactButton href={`tel:${(Bio as any).phone.replace(/\s+/g, '')}`}>
              <Phone />
              {(Bio as any).phone}
            </ContactButton>
          )}
        </ButtonsContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
