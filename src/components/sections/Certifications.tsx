import React from "react";
import styled from "styled-components";
import { certifications } from "../../data/constants";
import CertificationCard from "../cards/CertificationCard";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 16px;
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

const CertificationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 28px;
  justify-content: center;
`;

const Certifications = () => {
  return (
    <Container id="Certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc style={{ marginBottom: "20px" }}>
          Official professional certifications and cloud/AI credentials.
        </Desc>
        <CertificationsContainer>
          {certifications.map((certification, index) => (
            <CertificationCard
              key={`certification-${index}`}
              certification={certification}
            />
          ))}
        </CertificationsContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;
