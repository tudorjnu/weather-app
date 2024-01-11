import WeatherAPI from "./components/weather-api/WeatherAPI";

class App {
  constructor() {
    this.init();
    this.weatherAPI = new WeatherAPI();
  }

  init() {
    console.log("App initialized");
  }
}

export default App;
