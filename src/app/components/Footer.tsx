"use client";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 2rem;
  font-family: sans-serif;
  font-size: 14px;
  color: #222;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const FooterButton = styled.button`
  background-color: #d4e3f5;
  border: 1px solid #aac6e8;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  color: #1a1a1a;
  cursor: pointer;

  &:hover {
    background-color: #c3dbf1;
  }
`;

const InfoRow = styled.div`
  margin-bottom: 1rem;
  color: #333;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Copyright = styled.div`
  color: #444;
  margin-bottom: 1rem;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    color: #0066cc;
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Use in a React component
const Footer = () => (
  <FooterContainer>
    <ButtonRow>
      <FooterButton>🌐 See all help articles</FooterButton>
      <FooterButton>🔗 Contact us</FooterButton>
      <FooterButton>🌍 Choose language / velg språk ⌄</FooterButton>
    </ButtonRow>

    <InfoRow>Yr is a collaboration between</InfoRow>
    <Logos>
      <img src="/logo-nrk.png" alt="NRK logo" />
      <img src="/logo-meteorologisk.png" alt="Meteorologisk institutt logo" />
    </Logos>

    <Copyright>
      © Norwegian Meteorological Institute and the Norwegian Broadcasting
      Corporation 2007–2025 | Editor: Ingrid Støver Jensen | Meteorologically
      responsible: Roar Skålin
    </Copyright>

    <Links>
      <a href="#">Privacy</a>
      <a href="#">Cookies</a>
      <a href="#">Our collaborators</a>
      <a href="#">App for iOS</a>
      <a href="#">App for Android</a>
      <a href="#">Yr for developers</a>
      <a href="#">Water temperatures</a>
      <a href="#">Yr on Facebook</a>
      <a href="#">Yr on Twitter</a>
      <a href="#">Yr on Instagram</a>
    </Links>
  </FooterContainer>
);

export default Footer;
