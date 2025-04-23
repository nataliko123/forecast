"use client";

import styled from "styled-components";
import { FaSearch, FaBars, FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import LogoIcon from "../Icons/headerlogo";

export default function Header() {
  const [starred, setStarred] = useState(false);

  const toggleStar = () => {
    setStarred((prev) => !prev);
  };

  return (
    <Wrapper>
      <LeftSection>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <TextContainer>
          <Location>
            Tbilisi
            <StarButton onClick={toggleStar}>
              {starred ? (
                <FaStar color="#e59100" />
              ) : (
                <FaRegStar color="#888" />
              )}
            </StarButton>
          </Location>
          <SubText>Capital (Georgia), elevation 499 m</SubText>
        </TextContainer>
      </LeftSection>
      <RightSection>
        <Button>
          <FaSearch /> Search
        </Button>
        <Button>
          <FaBars /> Menu
        </Button>
      </RightSection>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.header`
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f6ff;
  padding: 1rem 2rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #00bfff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Location = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    font-size: 1rem;
  }
`;

const SubText = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

const RightSection = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #cde0f9;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #000;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    background-color: #bcd4f0;
  }
`;
