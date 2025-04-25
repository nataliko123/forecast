import Headertxt from "./components/Headertxt";
import PageHeader from "./components/Header";
import Location from "./components/location";
import WeatherCard from "./components/WeatherCard";
import WeatherForecast from "./components/WeatherForecast";
import Footer from "./components/Footer";
export default function Home() {
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
