"use client";
import styled from "styled-components";
import { CloudRain, Umbrella, Wind } from "lucide-react";

interface WeatherCardProps {
  currentData: {
    name: string;
    temp: number;
    feels_like: number;
    wind_speed: number;
    rain?: { "1h": number };
    weather?: string;
  } | null;
}

const CardWrapper = styled.div`
  background: #eef5ff;
  padding: 20px;
  justify-content: center;
  overflow-x: visible;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 1.0666666667rem 2.1333333333rem 1.6rem 2.1333333333rem;
  height:170px;
  width:1300px
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

const WeatherIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export default function WeatherCard({ currentData }: WeatherCardProps) {
  if (!currentData) {
    return <CardWrapper><Card>Enter a city to see weather</Card></CardWrapper>;
  }

  return (
    <CardWrapper>
      <Card>
        <Header>🕒 Current conditions in {currentData.name}</Header>

        <Column>
          <Row>
            <WeatherIcon
              src={`https://openweathermap.org/img/wn/${currentData.weather}@2x.png`}
              alt="Weather icon"
            />
            <Temp>{currentData.temp}°</Temp>
            <FeelsLike>Feels like {currentData.feels_like}°</FeelsLike>
          </Row>

          <Row>
            <Umbrella size={20} />
            <RainText>{currentData.rain?.["1h"] || 0} mm</RainText>
          </Row>

          <Row>
            <Wind size={20} />
            <WindText>{currentData.wind_speed} m/s</WindText>
          </Row>
        </Column>
      </Card>
    </CardWrapper>
  );
}