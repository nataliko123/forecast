"use client";

import styled from "styled-components";
import { CloudRain, Umbrella, Wind } from "lucide-react";

const CardWrapper = styled.div`
  background: #eef5ff;
  padding: 20px;
  justify-content: center;
  overflow-x: visible;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1.0666666667rem 2.1333333333rem 1.6rem 2.1333333333rem;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #222;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Column = styled.div`
  display: flex;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Temp = styled.div`
  color: #b00000;
  font-size: 32px;
  font-weight: bold;
`;

const FeelsLike = styled.span`
  font-size: 14px;
  color: #b00000;
  margin-left: 5px;
`;

const RainText = styled.span`
  font-size: 20px;
  color: #0070dd;
  font-weight: bold;
`;

const WindText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export default function WeatherCard() {
  return (
    <CardWrapper>
      <Card>
        <Header>🕒 Current conditions</Header>

        <Column>
          <Row>
            <CloudRain size={32} />
            <Temp>17°</Temp>
            <FeelsLike>Feels like 17°</FeelsLike>
          </Row>

          <Row>
            <Umbrella size={20} />
            <RainText>0.7 mm</RainText>
          </Row>

          <Row>
            <Wind size={20} />
            <WindText>2 m/s ↖</WindText>
          </Row>
        </Column>
      </Card>
    </CardWrapper>
  );
}
