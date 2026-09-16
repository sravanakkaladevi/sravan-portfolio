import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import { motion, AnimatePresence } from "motion/react";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
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

const ToggleButtonGroup = styled.div`
  display: flex;
  background: rgba(18, 18, 38, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.text_primary};
  font-size: 15px;
  border-radius: 14px;
  font-weight: 500;
  margin: 24px 0;
  padding: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px){
      font-size: 12px;
  }
`;

const ToggleButton = styled(motion.div)<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: ${({ theme }) => theme.text_secondary};
  &:hover {
    color: ${({ theme }) => theme.text_primary};
    background: rgba(255, 255, 255, 0.05);
  }
  @media (max-width: 768px) {
    padding: 6px 12px;
    border-radius: 8px;
  }
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary};
    color: ${theme.text_primary} !important;
    font-weight: 600;
    box-shadow: 0 4px 12px ${theme.primary}40;
  `}
`;

const Divider = styled.div`
  width: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 6px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Projects = ({ openModal, setOpenModal }: { openModal: any; setOpenModal: any }) => {
  const [toggle, setToggle] = useState("all");

  const displayedProjects =
    toggle === "all"
      ? projects
      : toggle === "featured"
      ? projects.filter((item) => item.featured)
      : projects.filter((item) => item.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Title>Projects Showcase</Title>
          <Desc style={{ marginBottom: "20px" }}>
            Featured practical applications built with Django, Python, Streamlit, data science, and blockchain.
          </Desc>
        </motion.div>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "featured"}
            onClick={() => setToggle("featured")}
            whileTap={{ scale: 0.95 }}
          >
            FEATURED
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
            whileTap={{ scale: 0.95 }}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
            whileTap={{ scale: 0.95 }}
          >
            WEB APPS
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
            whileTap={{ scale: 0.95 }}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={`project-${project.id}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
              >
                <ProjectCard
                  project={project}
                  setOpenModal={setOpenModal}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
