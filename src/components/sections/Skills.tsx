import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 24px;
  }
  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(225deg, #ffffff 40%, #c49eff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

// UIverse styled premium glassmorphism card with neon border pulse on hover
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(18, 18, 38, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    0 0 20px ${({ theme }) => theme.primary}0a;
  border-radius: 20px;
  padding: 24px 36px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    border-color: ${({ theme }) => theme.primary}66;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px ${({ theme }) => theme.primary}26;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 18px 30px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 20px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  opacity: 0.9;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
`;

// UIverse Component integration comment: Interactive glassmorphic skill tags
const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary}dd;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: ${({ theme }) => theme.primary}aa;
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 6px 18px ${({ theme }) => theme.primary}33;
  }

  &:active {
    transform: translateY(-1px) scale(0.97);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc
          style={{
            marginBottom: "30px",
          }}
        >
          Core computer science, programming, web, database, and tooling skills
          I actively use while building projects.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-group-${index}`} options={{ max: 10, scale: 1.01 }}>
              <Skill className="liquid-glass">
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;

