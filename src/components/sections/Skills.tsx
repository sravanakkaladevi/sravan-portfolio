import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import { motion } from "motion/react";

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

const SkillItem = styled(motion.div)<{ isHighlighted?: boolean }>`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary}dd;
  background: ${({ isHighlighted, theme }) =>
    isHighlighted ? `${theme.primary}20` : "rgba(255, 255, 255, 0.03)"};
  border: 1px solid
    ${({ isHighlighted, theme }) =>
      isHighlighted ? `${theme.primary}aa` : "rgba(255, 255, 255, 0.08)"};
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const PrimaryBadge = styled.span`
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 6px;
  margin-left: 4px;
  letter-spacing: 0.5px;
`;

const SkillImage = styled.img`
  width: 22px;
  height: 22px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Title>Skills</Title>
          <Desc style={{ marginBottom: "30px" }}>
            Technical competencies &amp; core practical stack used in building scalable applications.
          </Desc>
        </motion.div>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <motion.div
              key={`skill-group-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{ width: "100%", maxWidth: "500px", display: "flex", justifyContent: "center" }}
            >
              <Tilt options={{ max: 8, scale: 1.01 }}>
                <Skill className="liquid-glass">
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((item: any, index_x: number) => (
                      <SkillItem
                        key={`skill-x-${index_x}`}
                        isHighlighted={item.highlight}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <SkillImage
                          src={item.image}
                          alt={item.name}
                          onError={(e: any) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        {item.name}
                        {item.highlight && <PrimaryBadge>Primary</PrimaryBadge>}
                      </SkillItem>
                    ))}
                  </SkillList>
                </Skill>
              </Tilt>
            </motion.div>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
