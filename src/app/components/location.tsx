"use client";
import styled from "styled-components";

const LocationHeader = styled.div`
  position: relative;
  height: 3.2rem;
  overflow: hidden;
  display: flex;
`;

export default function Headertxt() {
  return (
    <LocationHeader>
      <ul>
        <li>
          <a href="">Forecast</a>
        </li>
        <li>
          <a href="">Other conditions</a>
        </li>
        <li>
          <a href="">Map</a>
        </li>
        <li>
          <a href="">Details</a>
        </li>
      </ul>
    </LocationHeader>
  );
}
