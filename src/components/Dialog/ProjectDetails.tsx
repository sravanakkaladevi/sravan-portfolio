import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

// UIverse styled project details glassmorphic card modal
const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 20px;
  margin: 50px 12px;
  height: min-content;
  background: rgba(18, 18, 38, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  color: ${({ theme }) => theme.text_primary};
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: 600px) {
    padding: 16px 20px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin: 12px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}a0;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin: 12px 6px;
  line-height: 1.6;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Label = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary}18;
  border: 1px solid ${({ theme }) => theme.primary}2b;
  padding: 4px 10px;
  border-radius: 8px;
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 6px;
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border: 1.5px solid rgba(255, 255, 255, 0.08);
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0px 8px 0px;
  gap: 12px;
`;

// UIverse Component integration comment: Custom glass border code & live action buttons inside dialog
const Button = styled.a<{ dull?: boolean }>`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.08);
        color: ${theme.text_secondary};
        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: ${theme.text_primary};
            box-shadow: none;
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px ${({ theme }) => theme.primary}4c;
  }
  
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper className="liquid-glass">
          <CloseRounded
            style={{
              position: "absolute",
              top: "16px",
              right: "20px",
              cursor: "pointer",
              fontSize: "28px",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} alt={project?.title} />
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={`modal-tag-${project?.id}-${index}`}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project?.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member, index) => (
                  <Member key={`modal-member-${project?.id}-${index}`}>
                    <MemberImage src={member.img} alt={member.name} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}
                    >
                      <GitHub style={{ fontSize: "20px", opacity: 0.8 }} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", marginLeft: "8px" }}
                    >
                      <LinkedIn style={{ fontSize: "20px", opacity: 0.8 }} />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            <Button href={project?.webapp} target="new">
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;

