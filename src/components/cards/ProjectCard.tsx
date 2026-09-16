import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const Card = styled(motion.div)`
  width: 340px;
  min-height: 480px;
  height: auto;
  background: rgba(18, 18, 38, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.primary}80;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.5),
      0 0 30px ${({ theme }) => theme.primary}26;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 340px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: rgba(255, 255, 255, 0.02);
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeaturedBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}2b;
  padding: 3px 8px;
  border-radius: 6px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0px 2px;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  opacity: 0.95;
  line-height: 1.35;
  margin-bottom: 2px;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}a0;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 13.5px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 6px;
  line-height: 1.5;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

const ActionButton = styled(motion.a)<{ primary?: boolean }>`
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  background: ${({ primary, theme }) =>
    primary ? theme.primary : "rgba(255, 255, 255, 0.05)"};
  color: ${({ primary, theme }) => (primary ? "#ffffff" : theme.text_primary)};
  border: 1px solid
    ${({ primary, theme }) =>
      primary ? "transparent" : "rgba(255, 255, 255, 0.1)"};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.primary : "rgba(255, 255, 255, 0.1)"};
  }
`;

const DEFAULT_PROJECT_SVG = `${import.meta.env.BASE_URL}projects/portfolio-website.svg`;

const ProjectCard = ({ project, setOpenModal }: { project: any; setOpenModal: any }) => {
  return (
    <Card
      className="liquid-glass"
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <ImageWrapper>
        {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
        <Image
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          onError={(e: any) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_PROJECT_SVG;
          }}
        />
      </ImageWrapper>
      <Tags>
        {project.tags?.map((tag: string, index: number) => (
          <Tag key={`project-tag-${project.id}-${index}`}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <CardFooter>
        <ActionButton
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={14} />
          View Code
        </ActionButton>
        {project.webapp && project.webapp !== project.github ? (
          <ActionButton
            primary
            href={project.webapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} />
            Live Demo
          </ActionButton>
        ) : (
          <ActionButton
            primary
            as="button"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenModal({ state: true, project: project });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} />
            Details
          </ActionButton>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
