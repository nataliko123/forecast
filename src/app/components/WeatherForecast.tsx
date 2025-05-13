'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

interface TabProps {
  active?: boolean;
}

interface ForecastData {
  day: string;
  temp: string; // e.g., "16°/11°"
  precip: string;
  wind: string;
  icons: string[]; // Icons for Night, Morning, Afternoon, Evening
}

interface WeatherForecastProps {
  forecastData: ForecastData[] | null;
}

const Container = styled.div`
  background-color: #edf5ff;
  padding: 20px;
  font-family: sans-serif;
`;

const ToggleTabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ToggleTabs = styled.div`
display: inline-flex;
    background-color: #edf5ff;
    padding: 4px;
    border-radius: 8px;
    border: 1px solid white;
    background-color: white;
`;

const Tab = styled.button<TabProps>`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  background-color: ${({ active }) => (active ? '#b6d4fe' : '#fff')};
  color: black;
  font-weight: ${({ active }) => (active ? '600' : '500')};
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  min-width: 100px;

  &:hover {
    background-color: ${({ active }) => (active ? '#b6d4fe' : '#f0f0f0')};
  }
`;

const ForecastTable = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 200px 280px 150px 100px 80px;
  align-items: center;
  padding: 12px 15px;
  background: #fff;
  margin-bottom: 8px;
  font-size: 15px;
  height: 68px;

  &:first-child {
    font-weight: bold;
    background: #f0f6ff;
    color: #333;
  }

  div,
  span {
    text-align: center;
  }

  & > div:first-child {
    text-align: left;
    font-weight: bold;
    color: #000;
  }
`;

const TimeLabels = styled.div`
  display: flex;
  justify-content: center;
  gap: 39px;
  font-weight: bold;
  font-size: 13px;
  color: #333;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 67px;
`;

const WeatherIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const Temperature = styled.span`
  color: #d80000;
  font-weight: bold;
`;

const Precip = styled.span`
  color: #005ea8;
`;

const Wind = styled.span`
  color: #333;
  font-weight: 500;
`;

export default function WeatherForecast({ forecastData }: WeatherForecastProps) {
  const [activeTab, setActiveTab] = useState<'Table' | 'Graph'>('Table');

  if (!forecastData) {
    return (
      <Container>
        <div>Enter a city to see forecast</div>
      </Container>
    );
  }

  return (
    <Container>
      <ToggleTabsWrapper>
        <ToggleTabs>
          <Tab active={activeTab === 'Table'} onClick={() => setActiveTab('Table')}>
            Table
          </Tab>
          <Tab active={activeTab === 'Graph'} onClick={() => setActiveTab('Graph')}>
            Graph
          </Tab>
        </ToggleTabs>
      </ToggleTabsWrapper>

      {activeTab === 'Table' ? (
        <ForecastTable>
          <Row>
            <div /> {/* Empty cell for Day label */}
            <div>
              <TimeLabels>
                <div>Night</div>
                <div>Morning</div>
                <div>Afternoon</div>
                <div>Evening</div>
              </TimeLabels>
            </div>
            <div>Temp</div>
            <div>Precip.</div>
            <div>Wind</div>
          </Row>

          {forecastData.map((item, index) => (
            <Row key={index}>
              <div>{item.day}</div>
              <div>
                <IconsContainer>
                  {item.icons.map((icon, idx) => (
                    <WeatherIcon
                      key={idx}
                      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                      alt="Weather icon"
                    />
                  ))}
                </IconsContainer>
              </div>
              <Temperature>{item.temp}</Temperature>
              <Precip>{item.precip}</Precip>
              <Wind>{item.wind}</Wind>
            </Row>
          ))}
        </ForecastTable>
      ) : (
        <div>Graph view (to be implemented)</div>
      )}
    </Container>
  );
}