'use client'
import React, { useState } from 'react';
import Headertxt from "./components/Headertxt";
import PageHeader from "./components/Header";
import Location from "./components/location";
import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";
import Footer from "./components/Footer";

import axios from 'axios'
export default function Home() {
  const[data,setData] = useState({})
  const [location, setLocation] = useState ('')
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=35.6895&lon=139.6917&appid=f90455b9c5e938ff438c43cc2c43f4e7`
  return (
    <>
      <Headertxt />
      <PageHeader />
      <Location />
      <WeatherCard />
      <WeatherForecast />
      <Footer />
    </>
  );
}
