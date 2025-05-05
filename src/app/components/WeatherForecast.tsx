// WeatherForecast.jsx
"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #edf5ff;
  padding: 20px;
  font-family: sans-serif;
`;

const ToggleTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => (props.active ? "#c9ddff" : "#fff")};
  color: ${(props) => (props.active ? "#000" : "#555")};
  font-weight: bold;
  cursor: pointer;
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

  &:first-child {
    font-weight: bold;
    background: #f0f6ff;
    color: #333;
  }

  div, span {
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
  gap: 32px;
  font-weight: bold;
  font-size: 13px;
  color: #333;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 6px;
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

const data = [
  {
    day: "Today 25 Apr.",
    icons: ["cloud", "cloud", "cloud", "night-cloud"],
    temp: "20° / 13°",
    precip: "0.4 mm",
    wind: "4 m/s",
  },
  {
    day: "Saturday 26 Apr.",
    icons: ["moon", "sun", "sun-cloud", "night-rain"],
    temp: "23° / 10°",
    precip: "2 mm",
    wind: "4 m/s",
  },
  {
    day: "Sunday 27 Apr.",
    icons: ["rain", "cloud-rain", "cloud", "moon"],
    temp: "19° / 12°",
    precip: "10 mm",
    wind: "7 m/s",
  },
  {
    day: "Monday 28 Apr.",
    icons: ["cloud-night", "sun-cloud", "cloud", "rain"],
    temp: "18° / 11°",
    precip: "0.6 mm",
    wind: "7 m/s",
  },
  {
    day: "Tuesday 29 Apr.",
    icons: ["moon", "sun", "sun", "night-cloud"],
    temp: "21° / 12°",
    precip: "0 mm",
    wind: "5 m/s",
  },
  {
    day: "Wednesday 30 Apr.",
    icons: ["cloud", "cloud", "sun-cloud", "cloud"],
    temp: "22° / 13°",
    precip: "1 mm",
    wind: "6 m/s",
  },
  {
    day: "Thursday 1 May",
    icons: ["rain", "cloud-rain", "rain", "night-rain"],
    temp: "17° / 11°",
    precip: "8 mm",
    wind: "8 m/s",
  },
  {
    day: "Friday 2 May",
    icons: ["moon", "sun", "sun-cloud", "night-cloud"],
    temp: "24° / 14°",
    precip: "0 mm",
    wind: "5 m/s",
  },
  {
    day: "Saturday 3 May",
    icons: ["cloud", "sun-cloud", "sun", "moon"],
    temp: "25° / 15°",
    precip: "0.2 mm",
    wind: "6 m/s",
  },
];

const WeatherForecast = () => {
  return (
    <Container>
      <ToggleTabs>
        <Tab active>Table</Tab>
        <Tab>Graph</Tab>
      </ToggleTabs>

      <ForecastTable>
        <Row>
          <div>Day</div>
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

        {data.map((item, index) => (
          <Row key={index}>
            <div>{item.day}</div>
            <div>
              <IconsContainer>
                {item.icons.map((icon, idx) => (
                  <WeatherIcon
                    key={idx}
                    src={`https://example.com/icons/${icon}.png`}
                    alt={icon}
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
    </Container>
  );
};

export default WeatherForecast;
