import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.08) rotate(3deg);
  }

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary}ee;
  margin-bottom: 10px;
  line-height: 1.6;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-top: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

// UIverse Component integration comment: Interactive glassmorphic skill item tags inside Experience card
const Skill = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary}b3;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 4px 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// UIverse Component integration comment: Premium visual state button for credentials
const CertificateLink = styled.a`
  width: fit-content;
  margin-top: 12px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 4px 12px ${({ theme }) => theme.primary}4c;
    transform: translateY(-2px);
  }
`;

const DEFAULT_ORG_LOGO = `${import.meta.env.BASE_URL}logos/org-default.svg`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_ORG_LOGO;
          }}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(18, 18, 38, 0.5)",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(148, 92, 242, 0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.1)",
      }}
      date={experience.date}
    >
      <Top>
        <Image
          src={experience.img}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_ORG_LOGO;
          }}
        />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <Skills>
            <b style={{ color: "#a5a6c5", fontSize: "14px" }}>Skills:</b>
            <ItemWrapper>
              {experience?.skills?.map((skill, index) => (
                <Skill key={`exp-skill-${index}`}>{skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
        {experience?.doc && (
          <CertificateLink href={experience.doc} target="_blank">
            View Certificate
          </CertificateLink>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;

