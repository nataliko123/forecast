"use client";
import styled from "styled-components";

const LocationHeader = styled.div`
  position: relative;
  height: 3.2rem;
  overflow: hidden;
  display: flex;
  padding: 1rem 2rem;
`;

const LocationList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #061629;
  font-weight: 500;
`;

const Spanned = styled.span`
  font-weight: 700;
`;

const LocationItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function Headertxt() {
  return (
    <LocationHeader>
      <LocationList>
        <LocationItem>
          <a href="">
            <Spanned>Forecast</Spanned>
          </a>
        </LocationItem>
        <LocationItem>
          <a href="">Other conditions</a>
        </LocationItem>
        <LocationItem>
          <a href="">Map</a>
        </LocationItem>
        <LocationItem>
          <a href="">Details</a>
        </LocationItem>
      </LocationList>
    </LocationHeader>
  );
}
