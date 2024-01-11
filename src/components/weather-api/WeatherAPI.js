class WeatherAPI {
  constructor() {
    this.apiKey = "e22388f0771d490fab774625240801";
    this.city = "Liverpool";
    this.link = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`;
    this.weatherData = this.getWeather();
    console.log("weather app initialized");

    this.domElements = {
      location: {
        name: document.querySelector(".location__name"),
        region: document.querySelector(".location__region"),
        country: document.querySelector(".location__country"),
        localtime: document.querySelector(".location__localtime"),
      },
      current: {
        //   last_updated: document.querySelector(".current__last-updated"),
        //   temp_c: document.querySelector(".current__temp-c"),
        //   temp_f: document.querySelector(".current__temp-f"),
        //   is_day: document.querySelector(".current__is-day"),
        condition: {
          text: document.querySelector(".current__condition-text"),
          //     icon: document.querySelector(".current__condition-icon"),
          code: document.querySelector(".current__condition-code"),
        },
        //   wind_mph: document.querySelector(".current__wind-mph"),
        wind_kph: document.getElementById("wind-kph"),
        //   wind_degree: document.querySelector(".current__wind-degree"),
        //   wind_dir: document.querySelector(".current__wind-dir"),
        //   pressure_mb: document.querySelector(".current__pressure-mb"),
        //   pressure_in: document.querySelector(".current__pressure-in"),
        //   precip_mm: document.querySelector(".current__precip-mm"),
        //   precip_in: document.querySelector(".current__precip-in"),
        humidity: document.getElementById("humidity"),
        //   cloud: document.querySelector(".current__cloud"),
        feelslike: document.getElementById("feelslike"),
        //   feelslike_f: document.querySelector(".current__feelslike-f"),
        //   vis_km: document.querySelector(".current__vis-km"),
        //   vis_miles: document.querySelector(".current__vis-miles"),
        //   uv: document.querySelector(".current__uv"),
        //   gust_mph: document.querySelector(".current__gust-mph"),
        //   gust_kph: document.querySelector(".current__gust-kph"),
      },
    };
    this.init();
  }

  getWeather = async () => {
    try {
      const response = await fetch(this.link, { mode: "cors" });
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const renderLocation = () => {
      this.domElements.location.name.textContent =
        this.weatherData.location.name;
      this.domElements.location.region.textContent =
        this.weatherData.location.region;
      this.domElements.location.country.textContent =
        this.weatherData.location.country;
      this.domElements.location.localtime.textContent =
        this.weatherData.location.localtime;
    };
    const renderCurrent = () => {
      this.domElements.current.feelslike.textContent = `${this.weatherData.current.feelslike_c} °C`;
      this.domElements.current.humidity.textContent = `${this.weatherData.current.humidity} %`;
      this.domElements.current.wind_kph.textContent = `${this.weatherData.current.wind_kph} km/h`;
    };

    renderLocation();
    renderCurrent();
  }

  async init() {
    this.weatherData = await this.getWeather();
    this.render();
  }
}

export default WeatherAPI;
