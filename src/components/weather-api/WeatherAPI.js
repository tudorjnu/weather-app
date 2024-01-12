const weatherIconMap = {
  1000: "sunny", // or 'nights_stay' for night Clear
  1003: "partly_cloudy", // Partly cloudy
  1006: "cloud", // Cloudy
  1009: "cloud", // Overcast
  1030: "foggy", // Mist
  1063: "umbrella", // Patchy rain possible
  1066: "ac_unit", // Patchy snow possible
  1069: "ac_unit", // Patchy sleet possible
  1072: "ac_unit", // Patchy freezing drizzle possible
  1087: "thunderstorm", // Thundery outbreaks possible
  1114: "ac_unit", // Blowing snow
  1117: "ac_unit", // Blizzard
  1135: "foggy", // Fog
  1147: "foggy", // Freezing fog
  1150: "grain", // Patchy light drizzle
  1153: "grain", // Light drizzle
  1168: "ac_unit", // Freezing drizzle
  1171: "ac_unit", // Heavy freezing drizzle
  1180: "umbrella", // Patchy light rain
  1183: "umbrella", // Light rain
  1186: "umbrella", // Moderate rain at times
  1189: "umbrella", // Moderate rain
  1192: "umbrella", // Heavy rain at times
  1195: "umbrella", // Heavy rain
  1198: "ac_unit", // Light freezing rain
  1201: "ac_unit", // Moderate or heavy freezing rain
  1204: "ac_unit", // Light sleet
  1207: "ac_unit", // Moderate or heavy sleet
  1210: "ac_unit", // Patchy light snow
  1213: "ac_unit", // Light snow
  1216: "ac_unit", // Patchy moderate snow
  1219: "ac_unit", // Moderate snow
  1222: "ac_unit", // Patchy heavy snow
  1225: "ac_unit", // Heavy snow
  1237: "ac_unit", // Ice pellets
  1240: "umbrella", // Light rain shower
  1243: "umbrella", // Moderate or heavy rain shower
  1246: "umbrella", // Torrential rain shower
  1249: "ac_unit", // Light sleet showers
  1252: "ac_unit", // Moderate or heavy sleet showers
  1255: "ac_unit", // Light snow showers
  1258: "ac_unit", // Moderate or heavy snow showers
  1261: "ac_unit", // Light showers of ice pellets
  1264: "ac_unit", // Moderate or heavy showers of ice pellets
  1273: "thunderstorm", // Patchy light rain with thunder
  1276: "thunderstorm", // Moderate or heavy rain with thunder
  1279: "thunderstorm", // Patchy light snow with thunder
  1282: "thunderstorm", // Moderate or heavy snow with thunder
};

class WeatherAPI {
  constructor() {
    this.apiKey = "e22388f0771d490fab774625240801";
    this.location = "London";

    this.domElements = {
      currentIcon: document.getElementById("condition-icon"),
      searchButton: document.getElementById("search-button"),

      location: {
        name: document.querySelector(".location__name"),
        region: document.querySelector(".location__region"),
        country: document.querySelector(".location__country"),
        localtime: document.querySelector(".location__localtime"),
      },
      current: {
        //   temp_c: document.querySelector(".current__temp-c"),
        condition: {
          text: document.querySelector(".current__condition-text"),
          code: document.querySelector(".current__condition-code"),
        },
        wind_kph: document.getElementById("wind-kph"),
        humidity: document.getElementById("humidity"),
        feelslike: document.getElementById("feelslike"),
      },
    };

    this.init();
    setInterval(this.update.bind(this), 1000 * 10); // 10 seconds
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

  parseDate(dateString) {
    const date = new Date(dateString);
    return `${date.toDateString()}, ${date.toLocaleTimeString()}`;
  }

  bindKeyEvents() {
    this.domElements.searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      const city = document.getElementById("city").value;
      console.log("City: " + city);
      this.setLocation(city);
      this.update();
    });
  }

  render() {
    const renderLocation = () => {
      this.domElements.location.name.textContent =
        this.weatherData.location.name;
      this.domElements.location.region.textContent =
        this.weatherData.location.region;
      this.domElements.location.country.textContent =
        this.weatherData.location.country;
      this.domElements.location.localtime.textContent = this.parseDate(
        this.weatherData.location.localtime,
      );
    };

    const renderCurrent = () => {
      this.domElements.current.feelslike.textContent = `${this.weatherData.current.feelslike_c} °C`;
      this.domElements.current.humidity.textContent = `${this.weatherData.current.humidity} %`;
      this.domElements.current.wind_kph.textContent = `${this.weatherData.current.wind_kph} km/h`;
      const currentConditionCode = this.weatherData.current.condition.code;
      var currentConditionIcon = weatherIconMap[currentConditionCode];
      const dayOrNight = this.weatherData.current.is_day ? "day" : "night";

      console.log("Current condition icon: " + currentConditionIcon);
      console.log("Day or night: " + dayOrNight);
      currentConditionIcon =
        currentConditionIcon === "partly_cloudy"
          ? "partly_cloudy_" + dayOrNight
          : currentConditionIcon;
      this.domElements.currentIcon.innerText = currentConditionIcon;
    };

    renderLocation();
    renderCurrent();
  }

  setLocation(city) {
    this.link = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
  }

  async init() {
    this.link = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.location}`;
    this.weatherData = await this.getWeather();
    this.render();
  }

  async update() {
    try {
      this.weatherData = await this.getWeather();
    } catch (error) {
      console.log(error);
    }
    this.render();
  }
}

export default WeatherAPI;
