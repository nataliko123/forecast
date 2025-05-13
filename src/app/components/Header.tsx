"use client";
import styled from "styled-components";
import { FaSearch, FaBars, FaStar, FaRegStar } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import LogoIcon from "../Icons/headerlogo";

interface HeaderProps {
  location: string;
  setLocation: (location: string) => void;
  searchLocation: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  currentData: {
    name: string;
    temp: number;
    feels_like: number;
    wind_speed: number;
    rain?: { "1h": number };
    weather?: string;
  } | null;
}

export default function Header({ location, setLocation, searchLocation, currentData }: HeaderProps) {
  const [starred, setStarred] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to track the dropdown
  const searchInputRef = useRef<HTMLInputElement>(null); // Ref to track the search input

  const toggleStar = () => setStarred((prev) => !prev);
  const toggleSearchDropdown = () => setShowSearchDropdown((prev) => !prev);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false); // Close dropdown if click is outside
      }
    };

    // Add event listener when dropdown is open
    if (showSearchDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount or when dropdown closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchDropdown]);

  // Focus the search input when dropdown opens
  useEffect(() => {
    if (showSearchDropdown && searchInputRef.current) {
      searchInputRef.current.focus(); // Programmatically focus the input
    }
  }, [showSearchDropdown]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof setLocation === "function") {
      setLocation(e.target.value);
    } else {
      console.error("setLocation is not a function");
    }
  };

  return (
    <Wrapper>
      <LeftSection>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <FlexibleArea>
          {!showSearchDropdown ? (
            <TextContainer>
              <Location>
                {currentData ? currentData.name : "Search for a city"}
                <StarButton onClick={toggleStar}>
                  {starred ? <FaStar color="#e59100" /> : <FaRegStar color="#888" />}
                </StarButton>
              </Location>
              <SubText>Enter a city name to see weather</SubText>
            </TextContainer>
          ) : (
            <DropdownBox ref={dropdownRef}>
              <SearchInput
                ref={searchInputRef} // Attach ref to SearchInput
                autoFocus // Automatically focus the input when rendered
                placeholder="Search by location or coordinates"
                value={location}
                onChange={handleLocationChange}
                onKeyDown={searchLocation}
              />
              <SuggestionList>
                <NearbyItem>📍 Nearby</NearbyItem>
                <SuggestionItem>
                  <ClockIcon>🕒</ClockIcon>
                  <SuggestionText>
                    <strong>Recent searches</strong>
                    <div className="sub">Search for a city above</div>
                  </SuggestionText>
                </SuggestionItem>
              </SuggestionList>
            </DropdownBox>
          )}
        </FlexibleArea>
      </LeftSection>
      <RightSection>
        <Button onClick={toggleSearchDropdown}>
          <FaSearch /> Search
        </Button>
        <Button>
          <FaBars /> Menu
        </Button>
      </RightSection>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f0f6ff;
  padding: 1rem 2rem;
  position: relative;
  z-index: 1;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  position: relative;
`;

const LogoWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #b2cff5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;

  img {
    width: 24px;
    height: 24px;
  }
`;

const FlexibleArea = styled.div`
  flex-grow: 1;
  margin-left: 12px;
  position: relative;
  z-index: 5;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
`;

const Location = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  color: black;
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
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #cde0f9;
  border: none;
  border-radius: 6px;
  padding: 0 15px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0a2343;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  height: 2.8rem;

  &:hover {
    background-color: #bcd4f0;
  }
`;

const DropdownBox = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 6px 22px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background-color: #ffffff;
  border: 2px solid #0071e3;
  border-radius: 8px;
  margin-bottom: 1rem;
  outline: none;
  color:black;
  &:focus {
    border-color: #005bb5;
  }
`;

const SuggestionList = styled.div`
  padding-left: 4px;
`;

const NearbyItem = styled.div`
  color: #0057ff;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 1rem;
`;

const SuggestionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f4f7fb;
  }
`;

const ClockIcon = styled.div`
  font-size: 1.2rem;
  padding-top: 3px;
`;

const SuggestionText = styled.div`
  font-size: 1rem;

  .sub {
    font-size: 0.88rem;
    color: #666;
    margin-top: 2px;
  }
`;