"use client";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: absolute;
  top: 1.0666666667rem;
  right: 0;
  display: flex;
  color: #061629;
  font-weight: 500;
  font-size: 1.06rem;
  line-height: 1.46rem;
  max-width: 87.46rem;
  padding: 0 1.06rem;
`;

export default function Headertxt() {
  return (
    <HeaderContainer>
      <p>A collaboration between NRK and Norwegian Meteorological Institute</p>
    </HeaderContainer>
  );
}