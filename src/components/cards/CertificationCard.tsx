import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";

const Card = styled(motion.div)`
  width: 100%;
  max-width: 650px;
  background: rgba(18, 18, 38, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.35),
    0 0 20px ${({ theme }) => theme.primary}0a;
  border-radius: 20px;
  padding: 24px 30px;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary}80;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.45),
      0 0 30px ${({ theme }) => theme.primary}26;
  }

  @media (max-width: 768px) {
    padding: 18px 22px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Image = styled.img`
  height: 52px;
  width: 52px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Issuer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CodeBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  background: ${({ theme }) => theme.primary}22;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary}44;
  padding: 2px 8px;
  border-radius: 6px;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary}aa;
  margin-top: 2px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin: 4px 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 4px;
`;

const Skill = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary}cc;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 10px;
  border-radius: 8px;
`;

const CertificateButton = styled(motion.a)`
  width: fit-content;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 18px;
  background: ${({ theme }) => theme.primary};
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px ${({ theme }) => theme.primary}4c;
`;

const CertificationCard = ({ certification }: { certification: any }) => {
  return (
    <Card
      className="liquid-glass"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Top>
        <Image
          src={certification.img}
          alt={certification.issuer}
          onError={(e: any) => {
            e.currentTarget.src = `${import.meta.env.BASE_URL}logos/org-default.svg`;
          }}
        />
        <HeaderText>
          <Title>{certification.title}</Title>
          <Issuer>
            {certification.issuer}
            {certification.code && <CodeBadge>{certification.code}</CodeBadge>}
          </Issuer>
          <Date>Earned: {certification.date}</Date>
        </HeaderText>
      </Top>
      <Description>{certification.desc}</Description>
      {certification.skills && (
        <Skills>
          {certification.skills.map((skill: string, index: number) => (
            <Skill key={`cert-skill-${index}`}>{skill}</Skill>
          ))}
        </Skills>
      )}
      {certification.doc && (
        <CertificateButton
          href={certification.doc}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          View Certificate
        </CertificateButton>
      )}
    </Card>
  );
};

export default CertificationCard;
