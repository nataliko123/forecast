"use client";
import React, { useState } from "react";
import axios from "axios";
import NavTabs from "./components/NavTab";
import Headertxt from "./components/Headertxt";
import PageHeader from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";
import Footer from "./components/Footer";

export default function Home() {
  const [currentData, setCurrentData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState<string | null>(null);

  const searchLocation = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter" || !location.trim()) return;

    setError(null);
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY || "f90455b9c5e938ff438c43cc2c43f4e7";
    
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        axios.get(currentUrl),
        axios.get(forecastUrl),
      ]);

      setCurrentData({
        name: currentResponse.data.name || "Unknown",
        temp: Math.round(currentResponse.data.main?.temp) || 0,
        feels_like: Math.round(currentResponse.data.main?.feels_like) || 0,
        wind_speed: currentResponse.data.wind?.speed || 0,
        rain: currentResponse.data.rain || { "1h": 0 },
        weather: currentResponse.data.weather?.[0]?.icon || "01d",
      });

      const dailyData = aggregateDailyForecast(forecastResponse.data.list);
      setForecastData(dailyData);

      console.log("Current data:", currentResponse.data);
      console.log("Forecast data:", dailyData);
      setLocation("");
    } catch (error: any) {
      console.error("Error fetching weather:", error);
      setError("Could not find city. Please try again.");
      setCurrentData(null);
      setForecastData(null);
    }
  };

  const aggregateDailyForecast = (list: any[]) => {
    const dailyMap: { [key: string]: any } = {};

    list.forEach((item: any) => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toLocaleDateString("en-US", { day: "numeric", month: "short" });

      if (!dailyMap[dayKey]) {
        dailyMap[dayKey] = {
          day: date.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" }),
          temps: [],
          precip: 0,
          wind: [],
          icons: [],
          times: [],
        };
      }

      dailyMap[dayKey].temps.push(item.main.temp);
      dailyMap[dayKey].precip += item.rain?.["3h"] || 0;
      dailyMap[dayKey].wind.push(item.wind.speed);
      dailyMap[dayKey].icons.push(item.weather[0].icon);
      dailyMap[dayKey].times.push(date.getHours());
    });

    return Object.values(dailyMap).map((day: any) => ({
      day: day.day,
      temp: `${Math.round(Math.max(...day.temps))}° / ${Math.round(Math.min(...day.temps))}°`,
      precip: `${Math.round(day.precip * 10) / 10} mm`,
      wind: `${Math.round(Math.max(...day.wind))} m/s`,
      icons: [
        getIconForTime(day.icons, day.times, 0), // Night
        getIconForTime(day.icons, day.times, 6), // Morning
        getIconForTime(day.icons, day.times, 12), // Afternoon
        getIconForTime(day.icons, day.times, 18), // Evening
      ],
    })).slice(0, 7);
  };

  const getIconForTime = (icons: string[], times: number[], targetHour: number) => {
    const closest = times.reduce((prev, curr, i) =>
      Math.abs(curr - targetHour) < Math.abs(prev - targetHour) ? curr : prev
    );
    return icons[times.indexOf(closest)] || "01d";
  };

  return (
    <>
      <Headertxt />
      <PageHeader
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
        currentData={currentData}
      />
      <NavTabs />
      {error && <div style={{ color: "red", textAlign: "center", padding: "1rem" }}>{error}</div>}
      <WeatherCard currentData={currentData} />

      <WeatherForecast forecastData={forecastData} />
      <Footer />
    </>
  );
}