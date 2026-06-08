import React from "react";
import styled from "styled-components";

// UIverse Component integration comment: Glassmorphic Project Card with glow states on hover
const Card = styled.div`
  width: 330px;
  height: 490px;
  background: rgba(18, 18, 38, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary}80;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.5),
      0 0 30px ${({ theme }) => theme.primary}26;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.4s ease;
  
  ${Card}:hover & {
    transform: scale(1.03);
  }
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
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
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  opacity: 0.9;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}a0;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.5;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: auto;
`;

const Avatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(18, 18, 38, 0.9);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px) scale(1.1);
    z-index: 10;
  }
`;

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <Card className="liquid-glass" onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={`project-tag-${project.id}-${index}`}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar
            key={`project-member-${project.id}-${index}`}
            src={member.img}
            alt={member.name}
          />
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;

